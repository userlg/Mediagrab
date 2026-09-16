import { fireEvent, render, screen } from "@testing-library/react";
import { readText } from "@tauri-apps/plugin-clipboard-manager";
import { describe, expect, it, vi } from "vitest";
import { AppHeader } from "../components/AppHeader";
import { BackgroundEffects, CardGlowEffects } from "../components/BackgroundEffects";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { LanguageSelector } from "../components/LanguageSelector";
import { Modal } from "../components/Modal";
import { NavigationTabs } from "../components/NavigationTabs";
import { OptionsPanel } from "../components/OptionsPanel";
import { PlatformsPanel } from "../components/PlatformsPanel";
import { ProgressBar } from "../components/ProgressBar";
import { Select } from "../components/Select";
import { StatusBanner } from "../components/StatusBanner";
import { SuccessModal } from "../components/SuccessModal";
import { Tooltip } from "../components/Tooltip";
import { UrlBar } from "../components/UrlBar";
import { VideoCard } from "../components/VideoCard";
import { LanguageProvider } from "../hooks/useLanguage";
import type { VideoInfo } from "../types";

const renderWithLang = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("AppHeader component", () => {
  it("renders title, logo, and language selector", () => {
    renderWithLang(<AppHeader />);
    expect(screen.getByText("Mediagrab")).toBeInTheDocument();
    expect(screen.getByRole("group", { name: /language/i })).toBeInTheDocument();
  });
});

describe("LanguageSelector component", () => {
  it("renders language buttons and switches active selection", () => {
    renderWithLang(<LanguageSelector />);
    const enBtn = screen.getByRole("button", { name: "EN" });
    const esBtn = screen.getByRole("button", { name: "ES" });

    expect(enBtn).toBeInTheDocument();
    expect(esBtn).toBeInTheDocument();

    fireEvent.click(esBtn);
    expect(esBtn).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(enBtn);
    expect(enBtn).toHaveAttribute("aria-pressed", "true");
  });
});

describe("BackgroundEffects & CardGlowEffects", () => {
  it("renders background blur elements and card glow without crash", () => {
    const { container } = render(
      <div>
        <BackgroundEffects />
        <CardGlowEffects />
      </div>,
    );
    expect(container.querySelector(".animate-drift-a")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

describe("UrlBar component", () => {
  it("handles input change, clearing, pasting, and submission", async () => {
    const handleUrlChange = vi.fn();
    const handleDownload = vi.fn();
    vi.mocked(readText).mockResolvedValueOnce("https://youtube.com/watch?v=pasted");

    const { rerender } = renderWithLang(
      <UrlBar
        url="https://youtube.com/watch?v=123"
        onUrlChange={handleUrlChange}
        onDownload={handleDownload}
        canDownload={true}
        disabled={false}
      />,
    );

    const input = screen.getByPlaceholderText(/enlace|link/i);
    expect(input).toHaveValue("https://youtube.com/watch?v=123");

    // Clear button
    const clearBtn = screen.getByRole("button", { name: /borrar|clear/i });
    fireEvent.click(clearBtn);
    expect(handleUrlChange).toHaveBeenCalledWith("");

    // Paste button
    const pasteBtn = screen.getByRole("button", { name: /pegar|paste/i });
    await fireEvent.click(pasteBtn);
    expect(handleUrlChange).toHaveBeenCalledWith("https://youtube.com/watch?v=pasted");

    // Submit form
    const submitBtn = screen.getByRole("button", { name: /descargar|download/i });
    fireEvent.click(submitBtn);
    expect(handleDownload).toHaveBeenCalled();

    // Disabled state
    rerender(
      <LanguageProvider>
        <UrlBar
          url=""
          onUrlChange={handleUrlChange}
          onDownload={handleDownload}
          canDownload={false}
          disabled={true}
        />
      </LanguageProvider>,
    );
    expect(screen.getByPlaceholderText(/enlace|link/i)).toBeDisabled();
  });
});

describe("OptionsPanel component", () => {
  const sampleInfo: VideoInfo = {
    title: "Options Sample",
    duration: 120,
    thumbnail: null,
    videoQualities: [1080, 720],
    audioBitrates: [320, 128],
  };

  it("handles mode toggle and format/quality select changes", () => {
    const handleModeChange = vi.fn();
    const handleFormatChange = vi.fn();
    const handleQualityChange = vi.fn();

    renderWithLang(
      <OptionsPanel
        info={sampleInfo}
        mode="video"
        onModeChange={handleModeChange}
        format="mp4"
        onFormatChange={handleFormatChange}
        quality="1080"
        onQualityChange={handleQualityChange}
        disabled={false}
      />,
    );

    const audioRadio = screen.getByRole("radio", { name: /audio/i });
    fireEvent.click(audioRadio);
    expect(handleModeChange).toHaveBeenCalledWith("audio");

    const formatSelect = screen.getByRole("combobox", { name: /format/i });
    fireEvent.change(formatSelect, { target: { value: "mkv" } });
    expect(handleFormatChange).toHaveBeenCalledWith("mkv");

    const qualitySelect = screen.getByRole("combobox", { name: /quality/i });
    fireEvent.change(qualitySelect, { target: { value: "720" } });
    expect(handleQualityChange).toHaveBeenCalledWith("720");
  });
});

describe("PlatformsPanel component", () => {
  it("renders supported platforms list", () => {
    renderWithLang(<PlatformsPanel />);
    expect(screen.getByText("YouTube")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("TikTok")).toBeInTheDocument();
  });
});

describe("Button component", () => {
  it("renders with default primary variant and handles click", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies secondary and danger variant styles", () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-white/10");

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-danger");
  });

  it("respects disabled state", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    const btn = screen.getByRole("button", { name: /disabled/i });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe("VideoCard component", () => {
  const sampleVideo: VideoInfo = {
    title: "Awesome Nature Video",
    duration: 125,
    thumbnail: "https://example.com/thumb.jpg",
    videoQualities: [1080],
    audioBitrates: [128],
  };

  it("renders thumbnail, title, and formatted duration", () => {
    render(<VideoCard info={sampleVideo} variant="compact" />);
    expect(screen.getByText("Awesome Nature Video")).toBeInTheDocument();
    expect(screen.getByText("2:05")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/thumb.jpg");
  });

  it("renders card variant cleanly", () => {
    render(<VideoCard info={sampleVideo} variant="card" />);
    expect(screen.getByText("Awesome Nature Video")).toBeInTheDocument();
  });
});

describe("Select component", () => {
  const options = [
    { value: "mp4", label: "MP4 Video" },
    { value: "mkv", label: "MKV Video" },
  ];

  it("renders options and triggers onChange", () => {
    const handleChange = vi.fn();
    render(<Select aria-label="Format" options={options} value="mp4" onChange={handleChange} />);

    const select = screen.getByRole("combobox", { name: /format/i });
    expect(select).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "MP4 Video" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "MKV Video" })).toBeInTheDocument();

    fireEvent.change(select, { target: { value: "mkv" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows emptyLabel when no options are provided", () => {
    render(<Select options={[]} emptyLabel="No options available" aria-label="Empty" />);
    expect(screen.getByText("No options available")).toBeInTheDocument();
  });
});

describe("StatusBanner component", () => {
  it("renders done status and dismiss button", () => {
    const handleDismiss = vi.fn();
    renderWithLang(<StatusBanner kind="done" message="All good" onDismiss={handleDismiss} />);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("All good")).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /cerrar|close/i });
    fireEvent.click(closeBtn);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it("renders error status with danger styling", () => {
    renderWithLang(<StatusBanner kind="error" message="Failed to download" onDismiss={() => {}} />);
    expect(screen.getByRole("alert")).toHaveClass("text-danger");
  });
});

describe("NavigationTabs component", () => {
  it("renders tabs and invokes onSelectView on tab click", () => {
    const handleSelect = vi.fn();
    renderWithLang(<NavigationTabs currentView="download" onSelectView={handleSelect} />);

    const downloadTab = screen.getByRole("tab", { name: /descargar|download/i });
    const platformsTab = screen.getByRole("tab", { name: /plataformas|platforms/i });

    expect(downloadTab).toHaveAttribute("aria-selected", "true");
    expect(platformsTab).toHaveAttribute("aria-selected", "false");

    fireEvent.click(platformsTab);
    expect(handleSelect).toHaveBeenCalledWith("platforms");
  });
});

describe("ProgressBar component", () => {
  it("renders progress percentage, speed, ETA and triggers cancel", () => {
    const handleCancel = vi.fn();
    renderWithLang(
      <ProgressBar
        progress={{ percent: 45.6, speed: "2.4MB/s", eta: "00:15" }}
        onCancel={handleCancel}
      />,
    );

    expect(screen.getByText("45.6%")).toBeInTheDocument();
    expect(screen.getByText("2.4MB/s")).toBeInTheDocument();
    expect(screen.getByText("ETA 00:15")).toBeInTheDocument();

    const cancelBtn = screen.getByRole("button", { name: /cancelar|cancel/i });
    fireEvent.click(cancelBtn);
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});

describe("Footer component", () => {
  it("renders brand, status beacon, version and Copyright 2026", () => {
    renderWithLang(<Footer />);
    expect(screen.getByText("Mediagrab")).toBeInTheDocument();
    expect(screen.getByText("v0.1.0")).toBeInTheDocument();
    expect(screen.getByText("© 2026")).toBeInTheDocument();
    expect(screen.getByText("MIT")).toBeInTheDocument();
  });
});

describe("Tooltip component", () => {
  it("renders children and triggers hover events", () => {
    render(
      <Tooltip text="Tooltip message">
        <button>Hover target</button>
      </Tooltip>,
    );

    const target = screen.getByRole("button", { name: /hover target/i });
    expect(target).toBeInTheDocument();

    fireEvent.mouseEnter(target.parentElement!);
    fireEvent.mouseLeave(target.parentElement!);
  });
});

describe("Modal & SuccessModal components", () => {
  it("renders modal when open is true", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders SuccessModal with video info and confirmation button", () => {
    const handleClose = vi.fn();
    const info: VideoInfo = {
      title: "Completed Video",
      duration: 60,
      thumbnail: "https://example.com/thumb.jpg",
      videoQualities: [1080],
      audioBitrates: [128],
    };

    renderWithLang(<SuccessModal open={true} info={info} onClose={handleClose} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Completed Video")).toBeInTheDocument();

    const okBtn = screen.getByRole("button", { name: /aceptar|ok/i });
    fireEvent.click(okBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

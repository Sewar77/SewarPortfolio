import Image from "next/image";

type ProjectPreviewProps = { compact?: boolean };
type ScreenshotPreviewProps = ProjectPreviewProps & {
  src: string;
  alt: string;
  width: number;
  height: number;
  disclaimer: string;
  isDemo?: boolean;
};

function ScreenshotPreview({
  compact = false,
  src,
  alt,
  width,
  height,
  disclaimer,
  isDemo = false,
}: ScreenshotPreviewProps) {
  return (
    <div
      className={`training-preview sdk-preview ${compact ? "preview-compact" : ""}`}
    >
      <div className="sdk-image-container">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="sdk-preview-image"
          sizes="(max-width: 768px) 100vw, 900px"
        />
        {isDemo && <span className="sdk-demo-badge">DEMO DATA</span>}
      </div>
      <div className="sdk-preview-disclaimer">
        <span aria-hidden="true">ⓘ</span>
        <p>{disclaimer}</p>
      </div>
    </div>
  );
}

export function TrainingPreview({ compact = false }: ProjectPreviewProps) {
  return (
    <ScreenshotPreview
      compact={compact}
      src="/projects/training-center/sdkfin.png"
      alt="SDK Training Center financial management interface showing filters, summaries, and student financial records"
      width={1918}
      height={885}
      isDemo
      disclaimer="The shown student and financial information is fictional demonstration data."
    />
  );
}

export function SubhPreview({ compact = false }: ProjectPreviewProps) {
  return (
    <ScreenshotPreview
      compact={compact}
      src="/projects/training-center/subh.png"
      alt="Subh analytics and administrative dashboard"
      width={1893}
      height={886}
      disclaimer="Subh administrative interface. Any visible example statistics are not claims of verified business performance."
    />
  );
}

export function AqdPreview({ compact = false }: ProjectPreviewProps) {
  return (
    <ScreenshotPreview
      compact={compact}
      src="/projects/training-center/contracts2.png"
      alt="Aqd Arabic RTL contract-management administration dashboard, developed collaboratively with Ionbit"
      width={1918}
      height={880}
      disclaimer="Aqd is a collaborative platform built with Ionbit. This screenshot shows its administration interface."
    />
  );
}

export function EduFlexPreview({ compact = false }: { compact?: boolean }) {
  return (
    <ScreenshotPreview
      compact={compact}
      src="/projects/training-center/lms.png"
      alt="EduFlex Learning Management System homepage featuring course discovery, navigation, and a responsive educational interface."
      width={1774}
      height={832}
      disclaimer="EduFlex is a full-stack academic LMS project developed during training at HTU, featuring dedicated student, instructor, and administrator experiences."
    />
  );
}

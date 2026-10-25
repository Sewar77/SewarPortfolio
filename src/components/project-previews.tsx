import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Command,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  MoreHorizontal,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import Image from "next/image";

/** Replace these CSS mockups with real screenshots in public/projects/{slug}/ when available. */
export function TrainingPreview({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={`training-preview sdk-preview ${
        compact ? "preview-compact" : ""
      }`}
    >
      <div className="sdk-image-container">
        <Image
          src="/projects/training-center/sdkfin.png"
          alt="SDK Training Center financial management dashboard"
          width={1918}
          height={885}
          className="sdk-preview-image"
          sizes="(max-width: 768px) 100vw, 900px"
          loading="eager"
        />

        <span className="sdk-demo-badge">
          DEMO DATA
        </span>
      </div>

      <div className="sdk-preview-disclaimer">
        <span>ⓘ</span>
        <p>
          All student records, contracts, and financial figures
          displayed are fictional and used for testing and
          demonstration purposes.
        </p>
      </div>
    </div>
  );
}
export function SubhPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`training-preview sdk-preview ${
        compact ? "preview-compact" : ""
      }`}
    >
      <div className="sdk-image-container">
        <Image
          src="/projects/training-center/subh.png"
          alt="SDK Training Center financial management dashboard"
          width={1918}
          height={885}
          className="sdk-preview-image"
          sizes="(max-width: 768px) 100vw, 900px"
          loading="eager"
        />

        <span className="sdk-demo-badge">
          DEMO DATA
        </span>
      </div>

      <div className="sdk-preview-disclaimer">
        <span>ⓘ</span>
        <p>
          All student records, contracts, and financial figures
          displayed are fictional and used for testing and
          demonstration purposes.
        </p>
      </div>
    </div>
  );
}

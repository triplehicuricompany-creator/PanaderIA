import { StudentShell } from "@/components/student/StudentShell";
import { videoCenter } from "@/content/platform";

export default function VideosPage() {
  return (
    <StudentShell title="Centro de videos privados">
      <div className="space-y-6">
        {videoCenter.map((module) => (
          <article key={module.module} className="rounded-3xl border border-toast/10 bg-white/75 p-6 shadow-soft">
            <h2 className="font-display text-2xl text-toast">{module.module}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {module.chapters.map((chapter) => (
                <div key={chapter.title} className="rounded-2xl border border-coral/15 bg-cream/70 p-5">
                  <p className="font-semibold text-cocoa">{chapter.title}</p>
                  {chapter.videos.map((video) => (
                    <div key={video.qrCode} className="mt-4 rounded-xl bg-white/75 p-4 text-sm text-cocoa/70">
                      <p className="text-coral">{video.title}</p>
                      <p>Video privado: {video.privateUrl}</p>
                      <p>QR preparado: /qr/{video.qrCode}</p>
                      <p>Boly™ contextual: {video.bolyPrompt}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </StudentShell>
  );
}

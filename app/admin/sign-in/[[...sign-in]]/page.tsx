import { SignIn } from "@clerk/nextjs";


export default function AdminSignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream px-6">
      <div className="text-center">
        <div className="font-serif text-2xl tracking-wide mb-6">
          DARIM <span className="text-brand-gold">LUXE</span>
          <div className="text-xs uppercase tracking-widest text-brand-black/50 mt-1">Admin Dashboard</div>
        </div>
        <SignIn path="/admin/sign-in" routing="path" fallbackRedirectUrl="/admin" />
      </div>
    </div>
  );
}

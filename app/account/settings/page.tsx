import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Profile Settings</h1>
      <form className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6 md:grid-cols-2">
        <InputField label="Profile photo URL" />
        <InputField label="Full name" />
        <InputField label="Sizes" />
        <InputField label="Delivery address" />
        <InputField label="Payment placeholder" />
        <InputField label="Communication preferences" />
        <InputField label="Notification settings" />
        <div className="md:col-span-2">
          <Button>Edit Profile</Button>
        </div>
      </form>
    </section>
  );
}

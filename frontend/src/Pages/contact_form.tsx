import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  // Validation
  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  // Send data to backend
  async function submitToServer(payload: FormState) {
  const res = await fetch("http://biacsys-backend-env.eba-mmrdihu8.ap-southeast-2.elasticbeanstalk.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || body.message || "Submission failed");
  }

  return res.json();
}


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setLoading(true);
    try {
      await submitToServer(form);
      setStatus({ ok: true, msg: "Message sent — thank you." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || "Submission failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold text-green-700 mb-2">Contact Us</h3>
      <p className="text-gray-600 mb-6">
        Tell us what you need and we’ll get back within 1–2 business days.
      </p>

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Name</span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 ${
            errors.name ? "border-red-400" : "border-gray-200"
          }`}
          type="text"
          name="name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-500 mt-1">
            {errors.name}
          </p>
        )}
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Email</span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
          type="email"
          name="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-500 mt-1">
            {errors.email}
          </p>
        )}
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Subject</span>
        <input
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
          type="text"
          name="subject"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`mt-1 block w-full rounded-md border px-3 py-2 h-36 focus:outline-none focus:ring-2 focus:ring-green-200 ${
            errors.message ? "border-red-400" : "border-gray-200"
          }`}
          name="message"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500 mt-1">
            {errors.message}
          </p>
        )}
      </label>

      <div className="flex items-center gap-4 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        <button
          type="button"
          onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
          className="text-gray-700 px-4 py-2 rounded-md border border-gray-200"
        >
          Reset
        </button>
      </div>

      {status && (
        <div className={`mt-4 text-sm ${status.ok ? "text-green-700" : "text-red-600"}`}>
          {status.msg}
        </div>
      )}
    </form>
  );
}

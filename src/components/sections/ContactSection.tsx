"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "Parlor Visit & Dine-in",
    flavorPreference: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");
  const [lastSummary, setLastSummary] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim() || formData.message.length < 5) {
      errs.message = "Please include a brief note or favorite flavor";
    }
    return errs;
  };

  const [copied, setCopied] = useState(false);

  const generateWhatsAppUrl = (data: typeof formData) => {
    const targetPhone = data.type.includes("Party") || data.type.includes("Catering")
      ? "918832416141"
      : "919168986666";

    const formattedMessage = [
      "🍦 *CREAMY DAY — ICE CREAM INQUIRY* 🍦",
      "",
      `👤 *Customer Name:* ${data.name.trim()}`,
      `📞 *Contact Number:* ${data.phone.trim()}`,
      `🍨 *Inquiry Type:* ${data.type}`,
      `🍓 *Flavors Interested In:* ${data.flavorPreference.trim() || "Open to recommendations"}`,
      `📝 *Details / Special Request:*`,
      `${data.message.trim()}`,
      "",
      "📍 _Sent via Creamy Day Website (Dowlaiswaram Parlor)_",
    ].join("\n");

    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const handleCopyMessage = () => {
    if (!lastSummary) return;
    const text = [
      "🍦 *CREAMY DAY — ICE CREAM INQUIRY* 🍦",
      "",
      `👤 *Customer Name:* ${lastSummary.name.trim()}`,
      `📞 *Contact Number:* ${lastSummary.phone.trim()}`,
      `🍨 *Inquiry Type:* ${lastSummary.type}`,
      `🍓 *Flavors Interested In:* ${lastSummary.flavorPreference.trim() || "Open to recommendations"}`,
      `📝 *Details / Special Request:*`,
      `${lastSummary.message.trim()}`,
      "",
      "📍 _Sent via Creamy Day Website (Dowlaiswaram Parlor)_",
    ].join("\n");

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const waUrl = generateWhatsAppUrl(formData);
      setLastWhatsAppUrl(waUrl);
      setLastSummary({ ...formData });

      // Automatically launch WhatsApp
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }

      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        type: "Parlor Visit & Dine-in",
        flavorPreference: "",
        message: "",
      });
    } catch {
      setErrors({
        form: "Unable to auto-open WhatsApp. Click the WhatsApp button directly below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#060913] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Visit Or Get In Touch"
          title="Fresh Scoops Waiting At"
          highlight="Our Parlor"
          subtitle="Reach out and connect with us today for orders, party tubs, catering, or any sweet inquiries!"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Address, Phones & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-navy-900/80 border border-navy-800 backdrop-blur-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-4">
                Factory &amp; Parlor Location
              </span>

              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/70 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Creamy Day Parlor</h4>
                    <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.locality}, {siteConfig.contact.address.region}
                    </p>
                  </div>
                </div>

                {/* Telephone Lines */}
                <div className="flex items-start gap-4 pt-4 border-t border-amber-950/60">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/70 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Direct Phone Lines</h4>
                    <div className="mt-1 space-y-1.5 text-xs">
                      {siteConfig.contact.phones.map((phone) => (
                        <div key={phone.value} className="flex items-center justify-between gap-4">
                          <span className="text-stone-400">{phone.label}:</span>
                          <a
                            href={`tel:${phone.raw}`}
                            className="font-mono text-amber-300 hover:text-white font-medium"
                          >
                            {phone.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect */}
                <div className="flex items-start gap-4 pt-4 border-t border-amber-950/60">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400 mt-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">WhatsApp Hotline</h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Direct order booking &amp; instant response
                    </p>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 mt-1"
                    >
                      <span>+91 91689 86666 (Click to Chat)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 pt-4 border-t border-amber-950/60">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/70 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Electronic Mail</h4>
                    <p className="mt-1 text-xs font-mono text-amber-300">
                      <a href={`mailto:${siteConfig.contact.emails[0].value}`}>
                        {siteConfig.contact.emails[0].value}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-4 pt-4 border-t border-amber-950/60 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{siteConfig.contact.timings}</span>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-amber-900/40 h-56 relative bg-stone-900">
              <iframe
                src={siteConfig.contact.address.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Creamy Day Google Maps Location"
              />
            </div>
          </div>

          {/* Right Column: Order / Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-stone-950/90 border border-amber-900/40 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  Order Inquiries &amp; Party Tubs
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-mono font-bold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Direct Response
                </span>
              </div>
              <p className="text-xs text-stone-400 mb-6">
                Fill the details below to generate a pre-formatted WhatsApp order brief, or chat directly with our parlor team.
              </p>

              {/* Instant WhatsApp Shortcut Banner */}
              <div className="mb-6 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-emerald-300">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prefer fast ordering? Chat on WhatsApp now:</span>
                </div>
                <a
                  href="https://wa.me/919168986666?text=Hi%20Creamy%20Day!%20I'd%20like%20to%20inquire%20about%20ice%20cream%20flavors%20and%20orders."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-mono font-bold text-[11px] transition-transform hover:scale-105 shrink-0"
                >
                  Quick Chat ⚡
                </a>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-gradient-to-b from-emerald-950/60 via-stone-950/90 to-stone-950/95 border border-emerald-500/40 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                      WhatsApp Dispatch Ready
                    </span>
                    <h4 className="text-2xl font-display font-bold text-white">
                      Your WhatsApp Message is Formatted!
                    </h4>
                    <p className="text-sm text-stone-300 max-w-md mx-auto mt-2 leading-relaxed">
                      If WhatsApp didn&apos;t open automatically, click the button below to send your pre-filled inquiry directly to our Dowlaiswaram parlor.
                    </p>
                  </div>

                  {/* Summary Box & Copy Action */}
                  {lastSummary && (
                    <div className="relative p-5 rounded-2xl bg-stone-900/90 border border-emerald-800/40 text-left text-xs space-y-2 font-mono text-stone-300 max-w-md mx-auto shadow-inner">
                      <div className="flex justify-between items-center text-emerald-300 font-bold border-b border-stone-800 pb-2 mb-2">
                        <span className="text-[11px] uppercase tracking-wider">🍦 Order Brief Preview</span>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors text-[10px]"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Text</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p><span className="text-stone-500">Guest:</span> {lastSummary.name}</p>
                      <p><span className="text-stone-500">Contact:</span> {lastSummary.phone}</p>
                      <p><span className="text-stone-500">Type:</span> {lastSummary.type}</p>
                      {lastSummary.flavorPreference && (
                        <p><span className="text-stone-500">Flavors:</span> {lastSummary.flavorPreference}</p>
                      )}
                      <p><span className="text-stone-500">Note:</span> {lastSummary.message}</p>
                    </div>
                  )}

                  {/* High Visibility Direct WhatsApp Action Buttons */}
                  <div className="pt-2 flex flex-col gap-3 max-w-md mx-auto">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageSquare className="w-5 h-5 fill-white/20" />
                      <span>Open WhatsApp &amp; Send Message</span>
                      <ExternalLink className="w-4 h-4 opacity-80" />
                    </a>

                    <div className="flex items-center gap-3">
                      <a
                        href="https://wa.me/918832416141?text=Hi%20Creamy%20Day!%20Inquiring%20about%20party%20tubs%20and%20bulk%20orders."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-emerald-500/40 text-stone-300 hover:text-white text-xs font-mono transition-colors"
                      >
                        <span>Party Hotline WhatsApp</span>
                      </a>

                      <Button
                        onClick={() => setIsSuccess(false)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errors.form && (
                    <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cname" className="block text-xs font-mono font-medium text-stone-300 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="cname"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-stone-900 border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.name ? "border-red-500" : "border-stone-800 focus:border-amber-400"
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="cphone" className="block text-xs font-mono font-medium text-stone-300 mb-2 uppercase tracking-wider">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        id="cphone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-stone-900 border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.phone ? "border-red-500" : "border-stone-800 focus:border-amber-400"
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ctype" className="block text-xs font-mono font-medium text-stone-300 mb-2 uppercase tracking-wider">
                        Order Type
                      </label>
                      <select
                        id="ctype"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Parlor Visit & Dine-in">Parlor Visit &amp; Dine-in</option>
                        <option value="Home Delivery Cups & Tubs">Home Delivery (Cups &amp; Tubs)</option>
                        <option value="Party Tubs & Bulk Gathering">Party Tubs &amp; Bulk Gathering</option>
                        <option value="Birthday & Wedding Catering">Birthday &amp; Wedding Catering</option>
                        <option value="Franchise Opportunity">Franchise Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cflav" className="block text-xs font-mono font-medium text-stone-300 mb-2 uppercase tracking-wider">
                        Preferred Flavors
                      </label>
                      <input
                        type="text"
                        id="cflav"
                        value={formData.flavorPreference}
                        onChange={(e) => setFormData({ ...formData, flavorPreference: e.target.value })}
                        placeholder="e.g. Vanilla, Belgian Chocolate, Mango"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cmessage" className="block text-xs font-mono font-medium text-stone-300 mb-2 uppercase tracking-wider">
                      Message / Special Requests *
                    </label>
                    <textarea
                      id="cmessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know how many guests, flavor mix, or preferred delivery timing..."
                      className={`w-full px-4 py-3 rounded-xl bg-stone-900 border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-stone-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        Formatting WhatsApp Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-emerald-300" />
                        Send Order Inquiry via WhatsApp
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

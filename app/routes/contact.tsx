import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/contact";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Contact - Receptia | Solutions IA & Digital sur Mesure",
    description:
      "Contactez Receptia pour vos projets IA et digitalisation. Chatbots intelligents, automatisation, solutions sur mesure. Devis gratuit, réponse sous 24h.",
  });
}

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: "",
        budget: "",
        timeline: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label">
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="label">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="label">
                      {t("contact.form.company")}
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="label">
                    {t("contact.form.project")}
                  </label>
                  <textarea
                    id="project"
                    required
                    rows={4}
                    className="input"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="label">
                      {t("contact.form.budget")}
                    </label>
                    <select
                      id="budget"
                      className="input"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="">Sélectionner...</option>
                      <option value="showcase">{t("contact.form.budgetOptions.showcase")}</option>
                      <option value="small">{t("contact.form.budgetOptions.small")}</option>
                      <option value="medium">{t("contact.form.budgetOptions.medium")}</option>
                      <option value="large">{t("contact.form.budgetOptions.large")}</option>
                      <option value="discuss">{t("contact.form.budgetOptions.discuss")}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="label">
                      {t("contact.form.timeline")}
                    </label>
                    <select
                      id="timeline"
                      className="input"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="">Sélectionner...</option>
                      <option value="asap">{t("contact.form.timelineOptions.asap")}</option>
                      <option value="month">{t("contact.form.timelineOptions.month")}</option>
                      <option value="quarter">{t("contact.form.timelineOptions.quarter")}</option>
                      <option value="flexible">{t("contact.form.timelineOptions.flexible")}</option>
                    </select>
                  </div>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-800 p-4 rounded-lg"
                  >
                    {t("contact.form.success")}
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 text-red-800 p-4 rounded-lg"
                  >
                    {t("contact.form.error")}
                  </motion.div>
                )}

                <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold mb-4">{t("contact.alternatives.title")}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">{t("contact.alternatives.phone")}</p>
                  <a href="tel:+33123456789" className="text-indigo-500 hover:text-indigo-600">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">{t("contact.alternatives.email")}</p>
                  <a href="mailto:contact@receptia.fr" className="text-indigo-500 hover:text-indigo-600">
                    contact@receptia.fr
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">WhatsApp</p>
                  <a
                    href="https://wa.me/33123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4">{t("contact.alternatives.meeting")}</h3>
              <p className="text-gray-600 mb-4">
                Préférez-vous discuter de vive voix ? Réservez un créneau de 30 minutes avec notre équipe.
              </p>
              <Button href="https://calendly.com/receptia" external fullWidth variant="secondary">
                Réserver un créneau
              </Button>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4">Nos bureaux</h3>
              <p className="text-gray-600">
                123 Avenue de la République
                <br />
                75011 Paris, France
              </p>
              <p className="text-gray-600 mt-4">Lundi - Vendredi : 9h - 18h</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

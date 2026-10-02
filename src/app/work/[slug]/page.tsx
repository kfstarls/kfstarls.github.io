import Link from "next/link";
import { notFound } from "next/navigation";
import OrderSimulationStudy from "@/components/order-simulation-study";
import ItHardwareStudy from "@/components/it-hardware-study";
import SupplierGatewayStudy from "@/components/supplier-gateway-study";
import SustainabilityStudy from "@/components/sustainability-study";
import SupplyChainAssistantStudy from "@/components/supply-chain-assistant-study";
import AnimusStudy from "@/components/animus-study";

const titles: Record<string, string> = { "animus-ai-blocker": "Animus AI Blocker", "sustainability-data-assistant": "Sustainability Data Assistant for Automotive", "order-simulation": "GenAI powered order simulation", "order-simulation-it-hardware": "Order simulation for IT hardware", "supply-chain-assistant": "Supply chains, made simple.", "supplier-gateway": "One front door for many partners.", "design-system": "A system that travels well." };

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  return { title: `${titles[slug] ?? "Project not found"} | Faiza Khan` };
}

export function generateStaticParams() { return Object.keys(titles).map((slug) => ({ slug })); }

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  if (!titles[slug]) notFound();
  if (slug === "order-simulation") return <OrderSimulationStudy />;
  if (slug === "order-simulation-it-hardware") return <ItHardwareStudy />;
  if (slug === "supplier-gateway") return <SupplierGatewayStudy />;
  if (slug === "sustainability-data-assistant") return <SustainabilityStudy />;
  if (slug === "supply-chain-assistant") return <SupplyChainAssistantStudy />;
  if (slug === "animus-ai-blocker") return <AnimusStudy />;
  const title = titles[slug];
  return <main className="case-page"><Link href="/" className="text-link">← Back to work</Link><section><p className="section-pill">Case study · Coming soon</p><h1>{title}</h1><p>The full story is on its way. For more about the process, design decisions, and outcomes, get in touch.</p><a className="text-link" href="mailto:faizakhan1012@gmail.com">Let’s talk ↗</a></section></main>;
}

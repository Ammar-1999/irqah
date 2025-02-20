import {
  motion,
  AnimatePresence,
  Transition,
  Variants,
  Variant,
  MotionConfig,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
type AccordionState = {
  expandedItem: React.Key | null;
  setExpandedItem: (value: React.Key | null) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

// Context
const AccordionContext = createContext<AccordionState | undefined>(undefined);

// Custom Hook
function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}

// Base Components
type AccordionProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  variants?: { expanded: Variant; collapsed: Variant };
  defaultExpanded?: React.Key | null;
  onItemChange?: (value: React.Key | null) => void;
};

function Accordion({
  children,
  className,
  transition,
  variants,
  defaultExpanded,
  onItemChange,
}: AccordionProps) {
  const [expandedItem, setInternalExpanded] = useState<React.Key | null>(defaultExpanded ?? null);

  const setExpandedItem = (value: React.Key | null) => {
    setInternalExpanded(value);
    onItemChange?.(value);
  };

  return (
    <MotionConfig transition={transition}>
      <AccordionContext.Provider value={{ expandedItem, setExpandedItem, variants }}>
        <div className={cn('relative', className)} role="region">
          {children}
        </div>
      </AccordionContext.Provider>
    </MotionConfig>
  );
}

// Item Component
type AccordionItemProps = {
  value: React.Key;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { expandedItem } = useAccordion();
  const isExpanded = value === expandedItem;

  return (
    <div
      className={cn('overflow-hidden', className)}
      data-expanded={isExpanded}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...child.props, value, expanded: isExpanded })
          : child
      )}
    </div>
  );
}

// Trigger Component
type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
  value?: React.Key;
};

function AccordionTrigger({ children, className, value }: AccordionTriggerProps) {
  const { expandedItem, setExpandedItem } = useAccordion();
  const isExpanded = value === expandedItem;

  const handleClick = () => {
    if (value) {
      setExpandedItem(isExpanded ? null : value);
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-expanded={isExpanded}
      type="button"
      className={cn('group w-full', className)}
      data-expanded={isExpanded}
    >
      {children}
    </button>
  );
}

// Content Component
type AccordionContentProps = {
  children: ReactNode;
  className?: string;
  value?: React.Key;
};

function AccordionContent({ children, className, value }: AccordionContentProps) {
  const { expandedItem, variants } = useAccordion();
  const isExpanded = value === expandedItem;

  const defaultVariants: Variants = {
    expanded: { height: 'auto', opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  const activeVariants = {
    expanded: { ...defaultVariants.expanded, ...variants?.expanded },
    collapsed: { ...defaultVariants.collapsed, ...variants?.collapsed },
  };

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={activeVariants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { ChevronUp, ChevronRight } from "lucide-react";

// Example implementations
const ExampleBasicAccordion = () => {
  return (
    <Accordion className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
      <AccordionItem value="getting-started">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          Getting Started
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Discover the fundamental concepts of Motion-Primitives. This section
            guides you through the installation process and provides an overview
            of how to integrate these components into your projects. Learn about
            the core functionalities and how to set up your first animation
            effectively.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="animation-properties">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          Animation Properties
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Explore the comprehensive range of animation properties available in
            Motion-Primitives. Understand how to manipulate timing, easing, and
            delays to create smooth, dynamic animations. This segment also
            covers the customization of animations to fit the flow and style of
            your web applications.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-usage">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          Advanced Usage
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Dive deeper into advanced techniques and features of
            Motion-Primitives. Learn about chaining animations, creating complex
            sequences, and utilizing motion sensors for interactive animations.
            Gain insights on how to leverage these advanced features to enhance
            user experience and engagement.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="community-and-support">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          Community and Support
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Engage with the Motion-Primitives community to gain additional
            support and insight. Find out how to participate in discussions,
            contribute to the project, and access a wealth of shared knowledge
            and resources. Learn about upcoming features, best practices, and
            how to get help with your specific use cases.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ExampleIconsAccordion = () => {
  return (
    <Accordion
      className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <AccordionItem value="getting-started" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div>Getting Started</div>
            <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Discover the fundamental concepts of Motion-Primitives. This section
            guides you through the installation process and provides an overview
            of how to integrate these components into your projects. Learn about
            the core functionalities and how to set up your first animation
            effectively.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="animation-properties" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div>Animation Properties</div>
            <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Explore the comprehensive range of animation properties available in
            Motion-Primitives. Understand how to manipulate timing, easing, and
            delays to create smooth, dynamic animations. This segment also
            covers the customization of animations to fit the flow and style of
            your web applications.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-usage" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div>Advanced Usage</div>
            <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Dive deeper into advanced techniques and features of
            Motion-Primitives. Learn about chaining animations, creating complex
            sequences, and utilizing motion sensors for interactive animations.
            Gain insights on how to leverage these advanced features to enhance
            user experience and engagement.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="community-and-support" className="py-2">
        <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center justify-between">
            <div>Community and Support</div>
            <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-zinc-500 dark:text-zinc-400">
            Engage with the Motion-Primitives community to gain additional
            support and insight. Find out how to participate in discussions,
            contribute to the project, and access a wealth of shared knowledge
            and resources. Learn about upcoming features, best practices, and
            how to get help with your specific use cases.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ExampleVariantAccordion = () => {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: { opacity: 1, scale: 1 },
        collapsed: { opacity: 0, scale: 0.7 },
      }}
    >
      <AccordionItem value="getting-started" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
              How do I start with Motion-Primitives?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Kick off your experience by setting up Motion-Primitives. This
            section covers the basics of installation and how to add animations
            to your projects. Youll get familiar with the initial setup and the
            core features quickly.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="animation-properties" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
              What are the key animation properties?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Discover a variety of properties to customize your animations. Learn
            to adjust timing, easing, and delays for smoother effects. This
            guide will help you tailor these settings to your apps needs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-features" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
              How do I use advanced features?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Advance your skills by using more complex functions of
            Motion-Primitives. Explore how to link animations together, create
            intricate sequences, and interact with motion sensors for dynamic
            effects.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="community-support" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50">
              How do I engage with the community?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Connect with the Motion-Primitives community for support and
            collaboration. Learn how to contribute, share knowledge, and access
            helpful resources. Stay updated on new updates and collective
            insights.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

// Export base components
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

// Export examples
export const AccordionBasic = ExampleBasicAccordion;
export const AccordionIcons = ExampleIconsAccordion;
export const AccordionVariant = ExampleVariantAccordion;

export default ExampleBasicAccordion;

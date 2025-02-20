import * as React from 'react';
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
  Variant,
  Variants,
} from 'framer-motion';
import { createContext, useContext, useState, useId, useEffect } from 'react';
import { cn } from '@/lib/utils';

type DisclosureContextType = {
  open: boolean;
  toggle: () => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const DisclosureContext = createContext<DisclosureContextType | undefined>(
  undefined
);

type DisclosureProviderProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

function DisclosureProvider({
  children,
  open: openProp,
  onOpenChange,
  variants,
}: DisclosureProviderProps) {
  const [internalOpenValue, setInternalOpenValue] = useState<boolean>(openProp);

  useEffect(() => {
    setInternalOpenValue(openProp);
  }, [openProp]);

  const toggle = () => {
    const newOpen = !internalOpenValue;
    setInternalOpenValue(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <DisclosureContext.Provider
      value={{
        open: internalOpenValue,
        toggle,
        variants,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
}

function useDisclosure() {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error('useDisclosure must be used within a DisclosureProvider');
  }
  return context;
}

type DisclosureProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  variants?: { expanded: Variant; collapsed: Variant };
  transition?: Transition;
};

export function Disclosure({
  open = false,
  onOpenChange,
  children,
  className,
  transition,
  variants,
}: DisclosureProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MotionConfig transition={transition}>
      <div className={cn('relative', className)} role="region">
        <DisclosureProvider
          open={open}
          onOpenChange={onOpenChange}
          variants={variants}
        >
          {mounted ? children : null}
        </DisclosureProvider>
      </div>
    </MotionConfig>
  );
}

interface TriggerChildProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

type TriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function DisclosureTrigger({ children, className }: TriggerProps) {
  const { toggle, open } = useDisclosure();
  const id = useId();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return React.Children.map(children, (child) => {
    if (!React.isValidElement<TriggerChildProps>(child)) {
      return child;
    }

    const childProps = child.props;

    return React.cloneElement(child, {
      ...childProps,
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        childProps.onClick?.(e);
        toggle();
      },
      id,
      role: 'button',
      'aria-expanded': open,
      'aria-controls': `${id}-content`,
      tabIndex: 0,
      onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
        childProps.onKeyDown?.(e);
        handleKeyDown(e);
      },
      className: cn(className, childProps.className),
    } as TriggerChildProps);
  });
}

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function DisclosureContent({ children, className }: ContentProps) {
  const { open, variants } = useDisclosure();
  const contentId = useId();

  const defaultVariants: Variants = {
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.25,
          delay: 0.05,
        },
      },
    },
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const activeVariants = {
    expanded: { ...defaultVariants.expanded, ...variants?.expanded },
    collapsed: { ...defaultVariants.collapsed, ...variants?.collapsed },
  };

  return (
    <div className={cn('overflow-hidden', className)}>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={activeVariants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Example implementations
function DisclosureBasic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[330px] text-black my-56 rounded-md border border-zinc-200 px-3 dark:border-zinc-700"
    >
      <DisclosureTrigger>
        <button className="w-full py-2 text-left text-sm" type="button">
          Show more
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className="overflow-hidden pb-3">
          <div className="pt-1 font-mono text-sm">
            <p>
              This example demonstrates how you can use{" "}
              <strong className="font-bold">Disclosure</strong> component.
            </p>
            <pre className="mt-2 rounded-md bg-zinc-100 p-2 text-xs dark:bg-zinc-950">
              {`function DisclosureBasic() {
  return (
    <Disclosure>
      <DisclosureTrigger>
        <button type="button">
          Show more
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div>hey</div>
      </DisclosureContent>
    </Disclosure>
  );
}`}
            </pre>
          </div>
        </div>
      </DisclosureContent>
    </Disclosure>
  );
}

function DisclosureCard() {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="relative h-[350px] w-[290px] overflow-hidden rounded-xl">
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src="https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg"
          alt="Les others studio - Que la montagne est belle ⛰"
          className="pointer-events-none h-auto w-full select-none"
          animate={isOpen ? "expanded" : "collapsed"}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        open={isOpen}
        onOpenChange={setIsOpen}
        className="absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50"
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900"
            type="button"
          >
            lesothers.studio
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700">
            <p>How beautiful the mountain is 🗻</p>
            <p className="line-clamp-3">
              The &quot;This is trail running&quot; campaign highlights the new trail
              collection from <strong className="font-medium">@salomon</strong>,
              trying to touch the (strong) sensations experienced by runners.
              With each model, its natural environment. To capture the Pulsar
              Trail Pro 2 in real conditions, we chose to take the athletes
              trudging in the French Alps, at 2,000 meters altitude.
            </p>
            <button
              className="mt-3 w-full rounded-[4px] border border-zinc-700 bg-zinc-900 px-4 py-1 text-zinc-50 transition-colors duration-300 hover:bg-zinc-800"
              type="button"
            >
              Learn More
            </button>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}

export { DisclosureBasic, DisclosureCard };
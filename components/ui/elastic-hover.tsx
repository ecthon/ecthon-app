"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ElasticHoverProps {
    children: React.ReactNode
    className?: string
    highlightClassName?: string
    /** Configuração do spring - stiffness (rigidez) */
    stiffness?: number
    /** Configuração do spring - damping (amortecimento) */
    damping?: number
    /** Configuração do spring - mass (massa) */
    mass?: number
}

interface HoverState {
    isHovering: boolean
    rect: DOMRect | null
}

const ElasticHoverContext = React.createContext<{
    setHoverState: (state: HoverState) => void
    containerRef: React.RefObject<HTMLDivElement | null>
} | null>(null)

export function ElasticHover({
    children,
    className,
    highlightClassName,
    stiffness = 400,
    damping = 30,
    mass = 0.8,
}: ElasticHoverProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [hoverState, setHoverState] = React.useState<HoverState>({
        isHovering: false,
        rect: null,
    })

    const springConfig = {
        type: "spring" as const,
        stiffness,
        damping,
        mass,
    }

    return (
        <ElasticHoverContext.Provider value={{ setHoverState, containerRef }}>
            <div ref={containerRef} className={cn("relative", className)}>
                <AnimatePresence>
                    {hoverState.isHovering && hoverState.rect && containerRef.current && (
                        <motion.div
                            className={cn(
                                "absolute pointer-events-none rounded-lg bg-muted/50 border border-border/50",
                                highlightClassName
                            )}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: hoverState.rect.left - containerRef.current.getBoundingClientRect().left,
                                y: hoverState.rect.top - containerRef.current.getBoundingClientRect().top,
                                width: hoverState.rect.width,
                                height: hoverState.rect.height,
                            }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={springConfig}
                            style={{ zIndex: 0 }}
                        />
                    )}
                </AnimatePresence>
                {children}
            </div>
        </ElasticHoverContext.Provider>
    )
}

interface ElasticHoverItemProps {
    children: React.ReactNode
    className?: string
    asChild?: boolean
}

export function ElasticHoverItem({ children, className, asChild }: ElasticHoverItemProps) {
    const context = React.useContext(ElasticHoverContext)
    const itemRef = React.useRef<HTMLDivElement>(null)

    if (!context) {
        throw new Error("ElasticHoverItem must be used within ElasticHover")
    }

    const { setHoverState } = context

    const handleMouseEnter = () => {
        if (itemRef.current) {
            setHoverState({
                isHovering: true,
                rect: itemRef.current.getBoundingClientRect(),
            })
        }
    }

    const handleMouseLeave = () => {
        setHoverState({
            isHovering: false,
            rect: null,
        })
    }

    return (
        <div
            ref={itemRef}
            className={cn("relative z-10", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}

"use client";
import {useLocation, useNavigate} from "react-router-dom";
import { ActionTooltip } from "@/components/ui/ActionToolTip.tsx";
import { MassageSVG } from "@/assets/svg/message/MassageSVG.tsx";
// @ts-ignore
import { cn } from "@/lib/utils.ts";

export const NavigationMessage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/";

    const handleNavigate = () => {
        navigate(`/`); // 파라미터를 URL에 포함시켜 이동
    };

    return (
        <ActionTooltip side="right" align="center" label="메시지">
            <button className="group flex items-center"
                    onClick={() => handleNavigate()}
            >
                <div
                    className={cn(
                        "absolute left-0 rounded-r-full transition-all w-[4px]",
                        !isActive && "group-hover:h-[20px]",
                        isActive
                            ? "h-[36px] shadow-[0_0_10px_2px_rgba(233,233,233,0.4)] bg-[rgb(255,255,255)]"
                            : "h-[8px] opacity-80",
                        "transition-all duration-300 ease-in-out"
                    )}
                />
                <div
                    className={`flex mx-3 h-[48px] w-[48px] transition-all overflow-hidden items-center justify-center
                        ${isActive ? "rounded-[16px] bg-[rgb(88,101,242)]"
                        : "rounded-[24px] bg-[rgb(43,45,49)] group-hover:rounded-[16px] group-hover:bg-[rgb(88,101,242)]"}
                `}
                >
                    <MassageSVG />
                </div>
            </button>
        </ActionTooltip>
    );
};

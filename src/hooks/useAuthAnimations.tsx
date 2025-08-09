import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

interface IProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  formRef: React.RefObject<HTMLFormElement | null>;
  activeTab: "login" | "register";
}

const useAuthAnimations = ({
  cardRef,
  titleRef,
  formRef,
  activeTab,
}: IProps) => {
  const authAnimation = useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, x: 30, y: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: 30, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
    // Form fields stagger
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll("label, input, button, span"),
        { opacity: 0, x: 30, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [activeTab]);
  return { authAnimation };
};
export default useAuthAnimations;

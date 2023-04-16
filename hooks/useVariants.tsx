const useVariants = ({ status }: { status: string }) => {
  const variants = {
    hidden: (status: string) => ({
      opacity: 0,
      x: status === "ascending" ? "100%" : "-100%",
    }),
    visible: { x: 0, opacity: 1 },
    exit: (status: string) => ({
      opacity: 0,
      x: status === "ascending" ? "-100%" : "100%",
      transition: {
        ease: "easeOut",
      },
    }),
  };
  return { variants };
};

export default useVariants;

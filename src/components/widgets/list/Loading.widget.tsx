import { Skeleton } from "@mui/material";

const LoadingWidget = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton
          key={`loading-${i}`}
          variant="text"
          sx={{ fontSize: "1rem" }}
        />
      ))}
    </>
  );
};

export default LoadingWidget;

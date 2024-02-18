import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface props {
  count: number | null;
  title: string;
}

const NumberBox = ({ count, title }: props) => {
  return (
    <Card variant="outlined" style={{ padding: "5em", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5">{count}</Typography>
      </CardContent>
      <CardActionArea>{title}</CardActionArea>
    </Card>
  );
};

export default NumberBox;

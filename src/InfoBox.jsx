import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 
  let HOT_URL = "https://images.unsplash.com/photo-1621413608535-d007d61f1876?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let COLD_URL = "https://images.unsplash.com/photo-1641607745477-4e0b7b46b400?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN_URL = "https://images.unsplash.com/photo-1590918481870-afedfbeb29f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return(<div className="InfoBox">
    <div className="cardContainer">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
        ? RAIN_URL
        : info.temp > 15
        ? HOT_URL
        : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
        ? <ThunderstormIcon/>
        : info.temp > 15
        ?< WbSunnyIcon />
        :< AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"} >
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
  </div>
  );
}
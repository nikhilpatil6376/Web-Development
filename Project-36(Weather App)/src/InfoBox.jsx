import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_85qy5Qcdj8wjHFfigvX-FxNYj3Nw08dG5Hb3apYRw&s";

    const HOT_URL = "https://images.pexels.com/photos/68661/tree-desert-namibia-dead-vlei-68661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const COLD_URL = "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const RAIN_URL = "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    return(
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                                ? RAIN_URL
                                : (info.temp >15) 
                                ? HOT_URL 
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80 
                            ? <ThunderstormIcon />
                            : (info.temp >15) 
                            ? <WbSunnyIcon /> 
                            : <AcUnitIcon />
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity} </p>
                            <p>Min Temp = {info.tempMin}&deg;C </p>
                            <p>Max Temp = {info.tempMax}&deg;C </p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
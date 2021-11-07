import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Container, Box } from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { pink } from '@mui/material/colors';


export default function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmitDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAIL',
            payload: movie
        })

        history.push('/MovieDetails')
    }


    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}
                elevation={6}
                onClick={() => { handleSubmitDetails(movie) }}
                sx={{ height: 575, width: 350 }}>
                <CardActionArea>
                    <Box display='flex' flexGrow={1}>
                        <OpenInNewIcon sx={{ color: pink[100] }} />
                    </Box>
                    <CardHeader
                        title={movie.title} />
                    <CardMedia
                        component="img"
                        image={movie.poster}
                        alt={movie.title} />
                </CardActionArea>
            </Card>
        </Container>
    )

} //end MovieItem
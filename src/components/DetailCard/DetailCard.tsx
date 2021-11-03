import { CardActions, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import React from 'react';
import './_detailCard.scss';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Badge from '@mui/material/Badge';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getUserDetails } from '../../utils/helper';

const DetailCard = ({data, updateVoteCount, deleteIdea}: any) => {
    const {title, description, voteCount, tags, createdAt, employeeId, id} = data;
    const date = new Date(createdAt).toDateString();
    const user = getUserDetails();

    return (
        <Card sx={{ minWidth: 280, width: 280, maxWidth: 380}} className="hc__card">
            <CardContent className="hc__card__content">
                <Typography variant="h6" component="div">
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>

                <Typography variant="body1">
                    {description}
                </Typography>

                <ul className="hc__card__tags">
                    {tags && tags.map((tag: string) => {
                        return <li key={tag}><Chip label={tag} /></li>
                    })
                    }
                </ul>

            </CardContent>

            <CardActions className="hc__card__actions">
                <IconButton aria-label="share" onClick={() => updateVoteCount(id, voteCount)}>
                <Badge badgeContent={voteCount} color="primary" className="hc__card__badge">
                    <ThumbUpAltIcon color="action" />
                </Badge>
                </IconButton>

                {/* <IconButton aria-label="edit">
                    <EditIcon color="action" />
                </IconButton> */}
                <IconButton aria-label="delete" className="hc__card__delete"
                    onClick={() => deleteIdea(id)} 
                    disabled={user.employeeId !== employeeId}>
                    <DeleteIcon color="action" />
                </IconButton>
                
            </CardActions>
        </Card>
    )
}

export default DetailCard;
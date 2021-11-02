import { CardActions, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import React from 'react';
import './_detailCard.scss';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DetailCard = ({data, updateVoteCount}: any) => {
    const {title, description, voteCount, tags, createdAt, id} = data;
    const date = new Date(createdAt).toDateString();

    return (
        <Card sx={{ minWidth: 250, width: 300, maxWidth: 380}} className="hc__card">
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>

                <Typography variant="body1">
                    <p>{description}</p>
                </Typography>

                <ul className="hc__card__tags">
                    {tags.map((tag: string) => {
                        return <li key={tag}><Chip label={tag} /></li>
                    })
                    }
                </ul>

            </CardContent>

            <CardActions className="hc__card__actions">
                <IconButton aria-label="share">
                <Badge badgeContent={voteCount} color="primary" className="hc__card__badge">
                    <ThumbUpAltIcon color="action" onClick={() => updateVoteCount(id, voteCount)} />
                </Badge>
                </IconButton>

                <IconButton aria-label="share">
                    <EditIcon color="action" />
                </IconButton>

                <IconButton aria-label="share">
                    <DeleteIcon color="action" />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default DetailCard;
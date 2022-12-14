import React, {useState, useEffect} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { deletePost,  likePost } from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [likes, setLikes] = useState(post?.likes);


    const userId = user?.result.sub || user?.result?._id;
    const hasLikedPost = likes.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(likes.filter((id) => id !== userId));
        } else {
            setLikes([...likes, userId]);
        }
    };


    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === (user?.result?.sub || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };


    const openPost = (e) => {
        // dispatch(getPost(post._id, history));

        history.push(`/posts/${post._id}`);
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={post.selectedFile.url || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6" style={{fontSize: '.975rem', fontWeight: '600'}}>
                        {post.tags.slice(2,3).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                        {', '}
                        {post.tags.slice(1,2).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                    </Typography>
                    {/*<Typography variant="h6" style={{fontSize: '.975rem', fontWeight: '600'}}>*/}
                    {/*    {post.name}*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" style={{fontSize: '.775rem'}}>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {/*<div className={classes.overlay3}>*/}
                {/*    <Typography variant="h6" style={{fontSize: '.775rem', fontWeight: '600'}}>*/}
                {/*        {post.tags.slice(2,3).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}*/}
                {/*        {', '}*/}
                {/*        {post.tags.slice(1,2).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}*/}
                {/*    </Typography>*/}
                {/*</div>*/}
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentId(post._id);
                            }}
                            style={{ color: 'white' }}
                            size="small"
                        >
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className='postTitle' gutterBottom variant="h5" component="h2" style={{fontSize: '1.2rem', fontWeight: '600'}}>{post.title}</Typography>
                <CardContent>
                    <Typography className='postBody' variant="body2" color="textSecondary" component="p"
                                style={{maxWidth: '280px', margin: '0 auto', textAlign: 'center'}}
                    >
                        {post.message}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;

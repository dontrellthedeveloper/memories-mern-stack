import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import CommentSection from "./CommentSection";

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post]);

    if (!post) return null;

    const openPost = (_id) => history.push(`/posts/${_id}`);

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <>

            <Paper style={{ padding: '15px', borderRadius: '20px', maxWidth: '800px', margin: '20px auto' }} elevation={6}>
                <div className={classes.cardImg}>
                    <div className={classes.imageSection2}>
                        <img className={classes.media} src={post.selectedFile.url || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                    </div>
                </div>
            </Paper>

            <Paper style={{ padding: '20px', borderRadius: '15px', maxWidth: '1200px', margin: '20px auto', textAlign: 'center' }} elevation={6}>
                <div className={classes.cardImg}>
                    <div className={classes.imageSection2}>
                        <Typography style={{fontWeight: '600'}} className={classes.postTitle} variant="h4" component="h2">{post.title}</Typography>
                        <Typography variant="h6">Created by: {post.name}</Typography>
                        <Typography style={{fontWeight: '600'}} variant="h6" component="h6">
                            {post.tags.slice(2,3).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                            {', '}
                            {post.tags.slice(1,2).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                        </Typography>
                        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>

                        <Typography className={classes.postMessage} gutterBottom variant="body1" component="p">{post.message}</Typography>

                        <Typography className={classes.postTags} gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>

                        {/*<Divider style={{ margin: '20px 0' }} />*/}
                        {/*<CommentSection post={post} />*/}
                    </div>
                </div>
            </Paper>


            <Paper style={{ padding: '20px', borderRadius: '15px', maxWidth: '600px', margin: '20px auto', textAlign: 'center' }} elevation={6}>
                <div className={classes.cardImg}>
                    <div className={classes.imageSection2}>
                        <CommentSection post={post} />
                    </div>
                </div>
            </Paper>


            <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
                {/*<div className={classes.card}>*/}
                {/*    <div className={classes.section}>*/}
                {/*        <Typography style={{fontWeight: '600'}} className={classes.postTitle} variant="h4" component="h2">{post.title}</Typography>*/}
                {/*        <Typography variant="h6">Created by: {post.name}</Typography>*/}
                {/*        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>*/}
                {/*        <Typography className={classes.postTags} gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>*/}
                {/*        <Typography className={classes.postMessage} gutterBottom variant="body1" component="p">{post.message}</Typography>*/}

                {/*        /!*<Divider style={{ margin: '20px 0' }} />*!/*/}
                {/*        /!*<Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>*!/*/}
                {/*        <Divider style={{ margin: '20px 0' }} />*/}
                {/*        <CommentSection post={post} />*/}
                {/*        /!*<Divider style={{ margin: '20px 0' }} />*!/*/}
                {/*    </div>*/}
                {/*    <div className={classes.imageSection}>*/}
                {/*        <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {recommendedPosts.length ? (
                    <div className={classes.section}>
                        <Typography style={{fontWeight: '600'}} gutterBottom variant="h5">You Might Also Like:</Typography>

                        <Divider />
                        <div className={classes.recommendedPosts} style={{ overflow: 'hidden'}}>
                            {recommendedPosts.slice(0,4).map(({ title, name, message, likes, selectedFile, _id, tags }) => (
                                <div style={{ margin: '20px', cursor: 'pointer', textAlign: 'center', padding: '20px 10px 0' }} onClick={() => openPost(_id)} key={_id}>
                                    <Typography className={classes.recommendedPostTags} gutterBottom variant="h6" color="textSecondary" component="h2">
                                        {tags.slice(2,3).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                                        {', '}
                                        {tags.slice(1,2).map((tag) => `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`)}
                                    </Typography>
                                    <img src={selectedFile.url} style={{objectFit: 'cover', borderRadius: '20px'}} width="200px" />
                                    <Typography style={{marginTop: '10px'}} gutterBottom variant="h6">{title}</Typography>

                                    {/*<Typography gutterBottom variant="subtitle2">{name}</Typography>*/}
                                    <Typography className='recommendedPost' gutterBottom variant="subtitle2">{message}</Typography>
                                    <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>

                                </div>
                            ))}
                        </div>
                    </div>
                ): (
                    <>
                    <div className={classes.section}>
                        <Typography style={{fontWeight: '600'}} gutterBottom variant="h5">No Recommended Posts</Typography>
                    </div>
                    </>
                )}
            </Paper>
        </>
    );
};

export default PostDetails;

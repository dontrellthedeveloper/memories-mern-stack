import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import FileBase64 from 'react-file-base64';
import {createPost, getPosts, updatePost} from '../../actions/posts';
import {TextField, Button, Typography, Paper, Input} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', message: '', tags: '' });
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory()
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))


    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        // console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
    }

    useEffect(() => {
        if (post) {
            setPostData(post);
            setSelectedFile(post)
        }
        // dispatch(getPosts())
    }, [dispatch ,post]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, {...postData, selectedFile, name: user?.result?.name}));
            clear();
        } else {
            dispatch(createPost({...postData, selectedFile, name: user?.result?.name}, history));
            // dispatch(getPosts())
            clear();
        }
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: ''});
        setSelectedFile('')
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper} elevation={6}>
                <Typography variant='h6' align='center'>
                    Please Sign In to create your own memories and like other's memories
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                {/*<TextField*/}
                {/*    name="creator"*/}
                {/*    variant="outlined"*/}
                {/*    label="Creator"*/}
                {/*    fullWidth*/}
                {/*    value={postData.creator}*/}
                {/*    onChange={(e) => setPostData({...postData, creator: e.target.value})}*/}
                {/*/>*/}
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    minRows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <input
                        type="file"
                        onChange={handleImage}
                        // value={selectedFile}
                    />
                    {/*<input*/}
                    {/*    type="file"*/}
                    {/*    // onChange={(e) => setPostData({...postData, selectedFile: e.target.files[0]})}*/}
                    {/*    onChange={(e) => {setSelectedFile(e.target.files[0])}}*/}
                    {/*    // value={postData.selectedFile}*/}
                    {/*/>*/}
                    {/*<FileBase64*/}
                    {/*    type="file"*/}
                    {/*    multiple={false}*/}
                    {/*    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}*/}
                    {/*/>*/}
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;

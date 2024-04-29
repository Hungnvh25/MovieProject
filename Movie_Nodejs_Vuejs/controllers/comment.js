const Comment = require('../models/comment')

exports.getListComment = (req,res,next) =>{
    Comment.findAll().then(comments =>{
        res.send({comments:comments})
    }).catch(err =>{
        console.log(err)
    })
}


exports.createComment = async (req,res,next) =>{
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
}

exports.updateComment = async (req,res,next) =>{
    const commentId = req.params.id;
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: commentId }
        });
        if (updated) {
            const updateComment = await Comment.findByPk(commentId);
            return res.json(updateComment);
        }
        throw new Error('Comment not found');
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ error: 'Failed to update comment' });
    }
}


exports.readComment = async (req,res,next) =>{
    const commentId = req.params.id;
    try {
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.send({comment:comment});
    } catch (error) {
        console.error('Error fetching comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.deleteComment = async (req,res,next) =>{
    const commentId = req.params.id;
    try {
        const deleted = await Comment.destroy({
            where: { id: commentId }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Comment not found');
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
}
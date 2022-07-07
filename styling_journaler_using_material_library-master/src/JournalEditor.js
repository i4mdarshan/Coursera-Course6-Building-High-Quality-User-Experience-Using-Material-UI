import React from 'react';
import { Button, Icon, IconButton, TextField } from '@mui/material';

class JournalEditor extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        const journal=this.props.journal;
        // console.log(journal);
        return (
            <div className={journal.journalMode == 'editor'?'show':'hide'} id="journal-editor">
                        <h1 id="journal-editor__date">{journal.date}</h1>
                        <h2 id="journal-editor__mood-label">How's your Mood Today</h2>
                        <div id="journal-editor__mood">
                            <IconButton className={journal.mood=='Excited' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Excited')}>
                                <Icon baseClassName="far" className="fa-smile-beam" />
                            </IconButton>
                            <IconButton className={journal.mood=='Happy' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Happy')}>
                                <Icon baseClassName="far" className="fa-smile" />
                            </IconButton>
                            <IconButton className={journal.mood=='Surprised' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Surprised')}>
                                <Icon baseClassName="far" className="fa-surprise" />
                            </IconButton>
                            <IconButton className={journal.mood=='Sad' ? 'selectedMood' : 'mood'} 
                               onClick={()=>this.props.setMood('Sad')}>
                                <Icon baseClassName="far" className="fa-frown" />
                            </IconButton>
                            <IconButton className={journal.mood=='Angry' ? 'selectedMood' : 'mood'} 
                                onClick={()=>this.props.setMood('Angry')}>
                                <Icon baseClassName="far" className="fa-angry" />
                            </IconButton>
                        </div>
                        <TextField variant="outlined" value={journal.title} onChange={this.props.onTitleChange} 
                            placeholder="What's on your Mind?" 
                            label="Title" id="journal-editor__title-editor" />
                        <TextField value={journal.writeup} onChange={this.props.onWriteupChange} 
                            placeholder="I am all excited to know how was your day like!" 
                            label="Writeup"
                            name="journal-editor__writeup-editor" 
                            id="journal-editor__writeup-editor" multiline
                            rows={10}></TextField>
                        <div id="journal-editor__actions">
                            <Button variant="primary" id="save_button" onClick={()=>this.props.onSave()}>Save</Button>
                            <Button variant="secondary" id="cancel_button" onClick={()=>this.props.onCancel()}>Clear</Button>
                        </div>
                    </div>
        );
    }
}

export default JournalEditor;
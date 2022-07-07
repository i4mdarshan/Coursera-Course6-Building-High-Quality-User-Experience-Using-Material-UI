import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MoodIcon from '@mui/icons-material/Mood'; //Excited
import { Box } from '@mui/material';

class JournalCollection extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <Box Component="div">
                <Typography variant="h3">Journals</Typography>
                <Box component="div" id="journal-catalog__collection">
                  {
                      this.props.collection.map((journal) => (
                          <Card onClick={()=>this.props.onJournalClicked(journal)} key={journal.id} className="journal-catalog__collection--journal">
                              <Typography variant="h3" id="title_date">{journal.title} - {journal.date}</Typography>
                              <Typography variant="p">{journal.writeup}</Typography>
                              <MoodIcon key={journal.id} className="material-icons"></MoodIcon>
                          </Card>
                      ))
                  }
                </Box>
            </Box>
        );
    }
}

export default JournalCollection;
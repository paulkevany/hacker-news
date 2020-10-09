import React, {Component} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'

class StorySummary extends Component {

    render(){

        return (
        
        <div>
            <Card style={{width: '60vw', height: '20vh'}}>

        
                <CardContent>

                    <Typography>
                        New Story
                    </Typography>
                </CardContent>
    
            </Card>
        </div>

        )

    }
    


}

export default StorySummary

import React from 'react';
import {Group} from './player';


function PlayList({list}) {

    return (


        <div>


            <h2>Players List:</h2>
            <div className="players-list">
                {list.map(player => (
                    <Group key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
}

export default PlayList;
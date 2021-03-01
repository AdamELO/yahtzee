import { useState } from 'react';
import Players from './Players';
import SectionSup from './SectionSup';
import SectionInf from './SectionInf';

function ScoreSheet() {

    return (
        <div>
            <SectionSup />
            <SectionInf />
        </div>
    )
}
export default ScoreSheet;
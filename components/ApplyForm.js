import React from 'react';
import Apply from '../pages/apply'

export default () => (
    <form>
        <div class="divTable">
            <div class="divTableBody">
                <div class="divTableRow">
                    <div class="divTableCell">First Name</div>
                    <div class="divTableCell">Last Name</div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">
                        <input class="input-item" type="text" id="firstName" name="firstName" required />
                    </div>
                    <div class="divTableCell">
                        <input class="input-item" type="text" id="firstName" name="firstName" required />
                    </div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">Address</div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell"><input class="input-item" type="text" id="address" name="address" required /></div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">SSN</div>
                </div>
                <div class="divTableCell">
                    <input class="input-item" type="password" id="ssn" name="ssn" maxlength="9" required />
                </div>
                <center>
                    <button class="apply-button">APPLY</button>
                </center>
            </div>
        </div>
    </form>
)

// class PersonalInfo extends React.Component {
//     constructor(props) {
//     }
// }

import '../styles/accounts/accounts.css';

function AccountsPage() {
    return (
        <div id="accountsPage">
            <h2 id="userHeader">User</h2>
            <div className="accountInfo" id="user">
                <h3>Checking:</h3>
                <p>$0</p>
            </div>

            <h2 id="recipientHeader">Authorized Recipient</h2>
            <div className="accountInfo" id="recipient">
                <h3>Checking:</h3>
                <p>$0</p>
            </div>
        </div>
    );
}

export default AccountsPage;
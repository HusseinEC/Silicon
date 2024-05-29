export default function AccountDetails() {
    return (
        <section className="account-details">
            <div className="container">
                <aside>
                    <section className="account-profile">
                        <div className="profile">
                            <div className="profile-image">
                                <img src="images/uploads/profiles/avatar.jpg" alt="" />
                                <form encType="multipart/form-data" method="post">
                                    <input id="fileUploader" type="file" name="file" hidden/>
                                    <label htmlFor="fileUploader" className="btn btn-circle btn-circle-sm"><i className="fa-regular fa-arrows-rotate"></i></label>
                                </form>
                            </div>
                            <div className="profile-info">
                                <h3 className="displayname">Dude Dudester</h3>
                                <p>dude.dudester@gmail.com</p>
                            </div>
                        </div>
                    </section>
                </aside>
                <div className="content">

                </div>
            </div>
        </section>
    );
}
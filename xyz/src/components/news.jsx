import React from "react";
function News() {
    return (
        <form>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword3" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Room-Number</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputPassword3" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Phone-Number</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputPassword3" />
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
    )
}

export default News
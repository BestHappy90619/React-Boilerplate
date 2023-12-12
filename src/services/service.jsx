import { DEBUG_MODE } from "@/utils/Constant";
import http from "@/utils/Http";

const _API = "";

const get_ex = () => {
    return http
        .get(_API + "")
        .then(
            (res) => {
                return res;
            },
            (err) => {
                if (!DEBUG_MODE) console.clear();
                return err.response;
            }
        )
        .catch((err) => {
            return err;
        });
}

const post_ex = (data) => {
    return http
        .post(_API + "", data)
        .then(
            (res) => {
                return res;
            },
            (err) => {
                if (!DEBUG_MODE) console.clear();
                return err.response;
            }
        )
        .catch((err) => {
            return err;
        });
}

const service = {
    get_ex,
    post_ex
};

export default service;
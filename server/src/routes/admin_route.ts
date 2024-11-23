import { admin_signup_controller, admin_login_controller, admin_update_controller ,admin_delete_controller} from "../controller/admin_controller";
import {parent_signup_controller , parent_update_controller, parent_delete_controller} from "./../controller/parent_controller"
import { Router } from "express";
import adminTokenVerify from "../middleware/admin_token_verify";
import { check_key } from "../middleware/check_secret_key";

const admin_router = Router();

admin_router.post("/signup/:key",check_key, admin_signup_controller);
admin_router.post("/login", admin_login_controller);
admin_router.put("/update", adminTokenVerify, admin_update_controller);
admin_router.delete("/delete",adminTokenVerify,admin_delete_controller);

admin_router.post("/parent/signup", adminTokenVerify,parent_signup_controller);
admin_router.put("/parent/update", adminTokenVerify,parent_update_controller);
admin_router.delete("/parent/delete",adminTokenVerify,parent_delete_controller);

export default admin_router;

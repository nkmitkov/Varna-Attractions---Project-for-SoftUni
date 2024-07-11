import styles from "./ErrorComponent.module.css";

export default function ErrorComponent({
    msg
}) {
    return (
        <div>
            <div className={styles["error-container"]}>
                <p>{msg}</p>
            </div>
        </div>
    );
}
import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  //テキストボックスを空にする
  document.getElementById("add-text").value = "";

  createIncompleatList(inputText);
};

const deleteFromIncompleatList = (target) => {
  document.getElementById("incompleat-list").removeChild(target);
};

const createIncompleatList = (text) => {
  //div作る
  const div = document.createElement("div");
  //クラス付与
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");

  //完了ボタン作る
  const compleatbutton = document.createElement("button");
  compleatbutton.innerText = "完了";
  compleatbutton.addEventListener("click", () => {
    deleteFromIncompleatList(compleatbutton.parentNode);
    //完了リストに追加する要素
    const addTarget = compleatbutton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const deleteTarget = backbutton.parentNode;
      document.getElementById("compleat-list").removeChild(deleteTarget);

      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleatList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    document.getElementById("compleat-list").appendChild(addTarget);
  });

  //削除ボタン作る
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //削除ボタンの親タグを削除
    deleteFromIncompleatList(deletebutton.parentNode);
  });

  //中にinputTextを入れる
  li.innerText = text;

  //divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleatbutton);
  div.appendChild(deletebutton);

  //未完了のリストに追加
  document.getElementById("incompleat-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

import { useEffect, useState } from "react";
import "../styles/card-form.css";

export function Form() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [titleDirty, setTitleDirty] = useState(false);
  const [discriptionDirty, setDiscriptionDirty] = useState(false);
  const [imgDirty, setImgDirty] = useState(false);
  const [linkDirty, setLinkDirty] = useState(false);
  const [dateDirty, setdateDirty] = useState(false);
  const [titlerro, setTitlerro] = useState("Укажите название");
  const [discriptionerro, setDiscriptionerro] = useState("Введите описание");
  const [imgerro, setImgerro] = useState("Введите ссылку");
  const [linkerro, setLinkerro] = useState("Введите ссылку");
  const [dateErro, setdateErro] = useState("");
  const [validation, setValidation] = useState(false);

  const enterTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 25) {
      setTitlerro("Введите название");
    } else {
      setTitlerro("");
    }
  };
  const enterDicsription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscription(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 100) {
      setDiscriptionerro("Введите описание");
    } else {
      setDiscriptionerro("");
    }
  };
  const enterIMG = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value);
    const uRL = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    if (uRL.test(String(img).toLowerCase())) {
      setImgerro("Введите ссылку");
    } else {
      setImgerro("");
    }
  };
  const enterLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
    const uRL = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    if (uRL.test(String(link).toLowerCase())) {
      setLinkerro("Введите ссылку");
    } else {
      setLinkerro("");
    }
  };
  const enterDate = (events: React.ChangeEvent<HTMLInputElement>) => {
    setDate(events.target.value);
    const times = Number(events.target.value);
    if (times > Date.now()) {
      setdateErro("Введите верную дату");
    } else {
      setdateErro("");
    }
  };

  const voidField = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;
      case "Discription":
        setDiscriptionDirty(true);
        break;
      case "img":
        setImgDirty(true);
        break;
      case "Link":
        setLinkDirty(true);
        break;
      case "Date":
        setdateDirty(true);
        break;
    }
  };
  useEffect(() => {
    if (titlerro || discriptionerro || imgerro || linkerro) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  });
  const onSubmited = (e: React.FormEvent) => {
    e.preventDefault();
    if (validation === true) {
      const newPost = {
        snippet: {
          publishedAt: Date.now(),
          title: title,
          description: discription,
          thumbnails: {
            medium: { url: img, width: 320, height: 180 },
          },
        },
        statistics: {
          viewCount: 0,
          likeCount: 0,
          dislikeCount: 0,
          favoriteCount: 0,
          commentCount: 0,
        },
      };
    }
  };

  return (
    <div className="section">
      <form className="login_container" onSubmit={onSubmited}>
        <div className="create">Create new card</div>
        <div className="info">
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <input
            value={title}
            onBlur={(e) => voidField(e)}
            onChange={(e) => enterTitle(e)}
            type="text"
            name="title"
          />
          {titleDirty && titlerro && <div className="mistake">{titlerro}</div>}
        </div>
        <div className="info">
          <div>
            <label htmlFor="discription">Discription</label>
          </div>
          <input
            value={discription}
            onBlur={(e) => voidField(e)}
            onChange={(e) => enterDicsription(e)}
            type="text"
            name="Discription"
          />
          {discriptionDirty && discriptionerro && (
            <div className="mistake">{discriptionerro}</div>
          )}
        </div>
        <div className="info">
          <div>
            <label htmlFor="Img">Img</label>
          </div>
          <input
            value={img}
            onBlur={(e) => voidField(e)}
            onChange={(e) => enterIMG(e)}
            type="text"
            name="img"
          />
          {imgerro && imgDirty && <div className="mistake">{imgerro}</div>}
        </div>
        <div className="info">
          <div>
            <label htmlFor="discription">Link video</label>
          </div>
          <input
            value={link}
            onBlur={(e) => voidField(e)}
            onChange={(event) => enterLink(event)}
            type="text"
            name="Link"
          />
          {linkerro && linkDirty && <div className="mistake">{linkerro}</div>}
        </div>
        <div className="info">
          <div>
            <label htmlFor="discription">Date of publish</label>
          </div>
          <input
            type="date"
            value={link}
            onBlur={(e) => voidField(e)}
            onChange={(event) => enterDate(event)}
            name="Link"
          />
          {linkerro && linkDirty && <div className="mistake">{dateErro}</div>}
        </div>
        <button type="submit" id="creat" disabled={!validation}>
          Creat card
        </button>
      </form>
    </div>
  );
}

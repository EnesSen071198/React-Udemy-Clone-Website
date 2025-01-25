import "../styles/MainTop.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const MainTop = () => {
  return (
    <div className='main-top-container'>
      <Stack direction='row' spacing={3}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt='Enes Şen'
          src='/static/images/avatar/1.jpg'
        />
        <Stack direction='column' spacing={1}>
          <h3 className='main-top-title'>Tekrar hoş geldiniz, Enes</h3>
          <p className='main-top-subtitle'>
            Manager, Yazılım Geliştirme{" "}
            <Button
              className='main-top-button'
              sx={{
                textDecoration: "underline",
                color: " #6d28da",
                textTransform: "none"
              }}>
              Mesleğini ve ilgi alanlarını düzenle
            </Button>
          </p>
        </Stack>
      </Stack>
    </div>
  );
};

export default MainTop;

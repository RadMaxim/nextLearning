import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import {infoCards} from "@/app/about/infoCards";



const About = () => {
    return (
        <Box sx={{ height: "calc(100vh - 8rem)", display: "flex", alignItems: "center" }}>
            <Box flex={0.5}></Box>
            <Box flex={11}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                    О нас
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                    Добро пожаловать на наш сайт! Мы команда разработчиков и дизайнеров,
                    увлечённых созданием современных веб‑приложений и образовательных
                    проектов. Наша цель — объединять технологии и творчество, делая их
                    доступными и понятными для всех.
                </Typography>

                <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
                    {infoCards.map((card, index) => (
                        <Paper key={index} elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant="body2">{card.content}</Typography>
                        </Paper>
                    ))}
                </Box>

                <Box sx={{ mt: 6, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                        Хотите узнать больше?
                    </Typography>
                    <Typography variant="body2">
                        Свяжитесь с нами через раздел <strong>Контакты</strong>, и мы будем
                        рады обсудить идеи и сотрудничество.
                    </Typography>
                </Box>
            </Box>
            <Box flex={0.5}></Box>
        </Box>
    );
};

export default React.memo(About);

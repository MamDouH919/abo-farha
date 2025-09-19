"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Container, Paper, Stack, Typography } from '@mui/material';
import SectionTitle from '../layouts/SectionTitle';


const PREFIX = "Services";
const classes = {
    text: `${PREFIX}-text`,
    container: `${PREFIX}-container`
};


const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
    [`& .${classes.container}`]: {
        position: "relative",
        background: theme.palette.background.default,
        borderRadius: 20,
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        [`&::before`]: {
            content: '""',
            position: "absolute",
            top: "-5px",
            left: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        [`&::after`]: {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        '&:hover': {
            [`&::after`]: {
                width: "150px",
                height: "100%",
            },
            [`&::before`]: {
                width: "150px",
                height: "100%",
            },
        },
    },
}));

const Services = () => {
    return (
        <Root maxWidth="lg" sx={{ my: 5 }} id={"our-services"}>
            <SectionTitle sectionTitle="خدماتنا" />
            <Stack spacing={5} my={10}>
                {/* Block 1 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        هل تبحث عن صباغ متميز في الكويت؟ أتساءل كيف يمكن أن تحصل على خدمات دهان عالية الجودة بأسعار تنافسية؟
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontSize={15}
                        color="text.secondary"
                        width={{ xs: "auto", md: "80%" }}
                        lineHeight={1.9}
                    >
                        اذا كنت تبحث عن <strong>أفضل شركة صباغ في الكويت</strong> تقدم خدمات
                        <strong>دهان المنازل</strong> و<strong>الديكورات الحديثة</strong>،
                        فشركة <strong>صباغ الكويت المحترف</strong> هي الخيار المثالي لك.
                        نقدم خدماتنا المتميزة في الدهان، مثل <strong>دهان الجدران</strong>،
                        <strong>صباغ الأسقف</strong>، <strong>دهان البوابات والأبواب</strong>
                        وحتى <strong>دهان الأرضيات</strong>.
                        نعمل بجد لتقديم أفضل جودة واحترافية لخدماتنا.
                        فريقنا مؤهل ومدرّب على أحدث تقنيات الدهان في الكويت،
                        ونستخدم أفضل المواد والمعدات لضمان دقة تنفيذ أعمال الصباغة.
                        نحرص على تقديم خدمات سريعة ونظيفة، مع الحفاظ على نظافة الموقع
                        وتقديم استشارات لاختيار <strong>ألوان الدهانات</strong> المناسبة لمنزلك.
                        <br /><br />
                        اتصل بنا الآن ولا تتردد في طلب الخدمة من
                        <strong>أفضل صباغ الكويت للدهانات والديكورات</strong>.
                    </Typography>
                </Paper>

                {/* Block 2 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        <strong>أفضل صباغ الكويت</strong>: خبرة في جميع أعمال الدهان والديكور
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        في الكويت، يبحث الكثيرون عن <strong>صباغ منازل</strong> يقدم خدمات دهان احترافية بأسعار تنافسية.
                        هل تعلم أن هناك فرقًا كبيرًا بين <strong>صباغ محترف</strong> وعامل دهان عادي؟
                        كيف يمكنك الحصول على أفضل قيمة مقابل المال من <strong>دهانات الكويت</strong>؟
                        سنستكشف في هذا المقال خدمات الصباغ المتميزة في الكويت، وكيفية اختيار أفضل صباغ شاطر.
                        <br /><br />
                        الصباغ الرخيص في الكويت يوفر المال بطريقة ذكية.
                        أسعارهم تنافسية ويمكن الوصول إليها من قبل الجميع.
                        يستخدمون مواد عالية الجودة مثل <strong>دهانات جوتن</strong> و<strong>دهانات الجزيرة</strong> لتحقيق أقصى فائدة.
                        خبرتهم تضمن لك الحصول على أفضل قيمة مقابل المال مع نتائج مضمونة.
                    </Typography>
                </Paper>

                {/* Block 3 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        أهمية اختيار صباغ محترف وخبير
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        عند البحث عن خدمات الدهان، من المهم جدًا اختيار <strong>صباغ شاطر بالكويت</strong>.
                        هذا الضمان لنتائج دهان رائعة وإتمام المشروع في الوقت المحدد وضمن الميزانية المتفق عليها.
                        الصباغ الخبير يقدم نصائح حول اختيار <strong>ألوان الدهانات الداخلية</strong>
                        و<strong>الدهانات الخارجية</strong> المناسبة، ويعرف آخر صيحات الموضة في
                        <strong>الديكور المنزلي</strong>.
                        <br /><br />
                        يستخدم الصباغ الخبير أفضل المواد والمنتجات لضمان جودة الدهان، مثل
                        <strong>دهانات بلاستيك</strong> و<strong>دهانات زيتي</strong>.
                        الاستثمار في خدمات الصباغ الاحترافية يضمن لك نتائج متميزة وطويلة الأمد.
                        <br /><br />
                        اختيار ألوان الدهان المناسبة مهم جدًا لمنزلك.
                        الألوان الفاتحة تجعل الغرفة تبدو أكبر وأكثر رحابة، بينما الألوان الداكنة
                        تضيف لمسة فاخرة. يجب أيضًا التنسيق بين ألوان الجدران والأثاث
                        لتحقيق تناغم ديكوري جميل.
                    </Typography>
                </Paper>

                {/* Block 4 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        تقنيات الدهان الحديثة والمبتكرة
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        مع تطور <strong>خدمات الصباغة في الكويت</strong>، ظهرت تقنيات حديثة للدهان
                        مثل <strong>دهان ثلاثي الأبعاد</strong> و<strong>الدهانات الإيطالية</strong>.
                        الصباغ المحترف يستطيع تنفيذ أحدث التصاميم والديكورات العصرية.
                        <br /><br />
                        اختيار ألوان الدهان مهم جدًا للجو العام للمنزل.
                        ننصحك بالتنسيق بين الألوان للحصول على ديكور رائع يعكس شخصيتك.
                        <br /><br />
                        إذا كنت تبحث عن <strong>صباغ ديكور</strong> أو <strong>صباغ منازل حديثة</strong>،
                        فنحن نقدم لك أفضل الحلول بأحدث المعدات والخامات عالية الجودة.
                    </Typography>
                </Paper>
            </Stack>
        </Root>

    )
}

export default Services
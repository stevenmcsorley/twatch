import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Typography } from '@mui/material'

SwiperCore.use([Navigation])

const Reviews = () => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <Box
      data-testid="Reviews"
      sx={{
        minHeight: '250px',
        position: 'relative',
        backgroundColor: '#F3F3F3',
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
          WHAT THEY’RE SAYING
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            zIndex: 999,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box ref={prevRef}>
            <ArrowBackIcon />
          </Box>
          <Box ref={nextRef}>
            <ArrowForwardIcon />
          </Box>
        </Box>
        <Box sx={{ flex: '0 0 100%' }}>
          <SwiperReact
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: prevRef.current ? prevRef.current : undefined,
              nextEl: nextRef.current ? nextRef.current : undefined,
            }}
            onInit={(swiper) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.update()
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box px={12} sx={{ textAlign: 'center' }}>
                <Typography sx={{ textAlign: 'center', pb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie enim sit amet mi posuere imperdiet. Mauris aliquet
                  leo luctus purus vulputate semper. Integer sed aliquet mi, ut
                  elementum felis.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  John Doe
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  CEO, Company
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box px={12} sx={{ textAlign: 'center' }}>
                <Typography sx={{ textAlign: 'center', pb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie enim sit amet mi posuere imperdiet. Mauris aliquet
                  leo luctus purus vulputate semper. Integer sed aliquet mi, ut
                  elementum felis.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  John Doe
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  CEO, Company
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box px={12} sx={{ textAlign: 'center' }}>
                <Typography sx={{ textAlign: 'center', pb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie enim sit amet mi posuere imperdiet. Mauris aliquet
                  leo luctus purus vulputate semper. Integer sed aliquet mi, ut
                  elementum felis.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  John Doe
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  CEO, Company
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box px={12} sx={{ textAlign: 'center' }}>
                <Typography sx={{ textAlign: 'center', pb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie enim sit amet mi posuere imperdiet. Mauris aliquet
                  leo luctus purus vulputate semper. Integer sed aliquet mi, ut
                  elementum felis.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  John Doe
                </Typography>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  CEO, Company
                </Typography>
              </Box>
            </SwiperSlide>
          </SwiperReact>
        </Box>
      </>
    </Box>
  )
}

export default Reviews

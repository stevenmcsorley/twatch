import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const MainFooter = () => {
  // 4 columns footer
  const footerColumns = [
    {
      title: 'About',
      links: [
        {
          title: 'About',
          href: '/about',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
        {
          title: 'Careers',
          href: '/careers',
        },
        {
          title: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          title: 'Terms of Use',
          href: '/terms-of-use',
        },
      ],
    },
    {
      title: 'Shop',
      links: [
        {
          title: 'Shop',
          href: '/shop',
        },
        {
          title: 'Collections',
          href: '/collections',
        },
        {
          title: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          title: 'Support',
          href: '/support',
        },
        {
          title: 'FAQ',
          href: '/faq',
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          title: 'Facebook',
          href: 'https://www.facebook.com/',
        },
        {
          title: 'Twitter',
          href: 'https://twitter.com/',
        },
        {
          title: 'Instagram',
          href: 'https://www.instagram.com/',
        },
        {
          title: 'Pinterest',
          href: 'https://www.pinterest.com/',
        },
      ],
    },
  ]

  return (
    <Container fixed>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', my: 8 }}
        data-testid="footer"
      >
        {footerColumns.map((column) => (
          <Box key={column.title}>
            <Box
              sx={{
                fontSize: 12,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'black',
                textDecoration: 'none',
                mb: 2,
              }}
            >
              {column.title}
            </Box>
            {column.links.map((link) => (
              <Box key={link.title}>
                <Box
                  sx={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    textTransform: 'Capitalize',
                    mb: 1,
                  }}
                >
                  <Link
                    href={link.href}
                    sx={{
                      color: 'gray',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'silver',
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default MainFooter

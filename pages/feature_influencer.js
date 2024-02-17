import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import VerifiedIcon from "@mui/icons-material/Verified";
import Head from "next/head";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const feature_influencer = () => {
  const [data, setData] = useState({
    title: "Top 10 Instagram influencers in India",
    socialMedia: "instagram",
    key: "topinstagram",
  });
  const [loading, setLoading] = useState(false);
  const [topinfluencers, setTopInfluencers] = useState();
  const classes = useStyles();
  const [value, setValue] = React.useState("topinstagram");

  const handlechange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const tempSocialMedia = value.includes("instagram")
          ? "instagram"
          : value.includes("twitter")
            ? "twitter"
            : value.includes("youtube")
              ? "youtube"
              : "";
        setData({
          socialMedia: tempSocialMedia,
          key: value,
          title: value.includes("100")
            ? `Top ${tempSocialMedia} influencers who reached 100k followers`
            : `Top 10 ${tempSocialMedia} influencers in India`,
        });
        let response = [];
        console.log(value);
        setLoading(true);
        if (data.key.trim().length > 0) {
          response = await axios.get(
            `https://vdtteq14bc.execute-api.ap-south-1.amazonaws.com/dev/?filter=${value}`
          );
        } else {
          throw Error("Page not found!");
        }
        if (response && response.data && response.data.length > 0) {
          setTopInfluencers(JSON.parse(response.data));
        } else {
          setTopInfluencers(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTop();
  }, [value]);

  console.log(topinfluencers);

  const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  return (
    <>
      <Head>
        <title>Influencer Discovery</title>
        <meta
          name="description"
          content="Increases brand awareness & reach, Builds credibility & trust, Saves cost & time, Improves sales & marketing,
            Boosts sharing potential on SM, Enriches content strategy, Track prospective influencers, Get your message across your target audience, Niche & Trending influencers,
            Partner only with quality and authentic influencers, Find creators similar to top influencers"
        />
        <meta
          name="og:title"
          property="og:title"
          content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
            influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
            campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <div
        className="home-service-area pt-100 pb-70"
        style={{ backgroundColor: "#E8EEF1" }}
      >
        <div className="container">
          <Paper className={classes.root}>
            <Tabs value={value} onChange={handlechange} centered>
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Instagram"
                value={"topinstagram"}
                icon={<InstagramIcon style={{ color: "#E90064" }} />}
              // href="/feature_influencer?title=Top 10 Instagram influencers in India&content=topinstagram"
              />
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Youtube"
                value={"topyoutube"}
                icon={<YouTubeIcon style={{ color: "#CD0404" }} />}
              // href="/feature_influencer?title=Top 10 YouTube Influencers&content=topyoutube"
              />
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Twitter"
                value={"toptwitter"}
                icon={<TwitterIcon style={{ color: "#0081C9" }} />}
              // href="/feature_influencer?title=Top Twitter Influencers in India&content=toptwitter"
              />
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Instagram 100k"
                value={"instagram100k"}
                icon={<InstagramIcon style={{ color: "#E90064" }} />}
              // href="/feature_influencer?title=Top Instagram influencers who reached 100k&content=100kinstagram"
              />
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Youtube 100k"
                value={"youtube100k"}
                icon={<YouTubeIcon style={{ color: "#CD0404" }} />}
              // href="/feature_influencer?title=Top YouTube influencers who reached 100k&content=100kyoutube"
              />
              <Tab
                style={{ fontWeight: "600" }}
                label="Top Twitter 100k"
                value={"twitter100k"}
                icon={<TwitterIcon style={{ color: "#0081C9" }} />}
              // href="/feature_influencer?title=Top Twitter influencers who reached 100k&content=100ktwitter"
              />
            </Tabs>
          </Paper>

          <center>
            <h2 style={{ marginTop: "2rem", fontFamily: "sans-serif" }}>
              {data.title}
            </h2>
            <p>
              Check out the Top 1,000 Instagrammers in the world. Discover which
              {data.socialMedia} dominate their category and get the most
              followers. Look into the most popular profiles as of February 2023
              for your marketing campaigns.
            </p>
          </center>
        </div>
      </div>
      {loading && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "2rem",
            margin: "2rem 0",
          }}
        >
          Loading...
        </div>
      )}
      {!loading && topinfluencers && (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "5rem 3rem",
            marginTop: "1rem",
          }}
        >
          <div
            className="container"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "0px",
            }}
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead style={{ backgroundColor: "#ECF2FF" }}>
                <tr>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Rank
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Influencer
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Followers
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Region
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Views(Avg.)
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Likes(Avg.)
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Comments(Avg.)
                  </th>
                  <th
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                      fontSize: "1rem",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {topinfluencers.map((i) => (
                  <tr
                    key={i.influencer_name + i.influencer_handle_name}
                    style={{ backgroundColor: "" }}
                  >
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {i.influencer_rank}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <div className="container" style={{ display: "flex" }}>
                        <div className="image">
                          <img
                            src={i.influencer_profile_picture}
                            style={{
                              borderRadius: "50%",
                              width: "60px",
                              height: "60px",
                            }}
                          />
                        </div>
                        <div
                          className="text"
                          style={{ paddingLeft: "20px", textAlign: "left" }}
                        >
                          <h6>
                            {i.influencer_handle_name}
                            <VerifiedIcon style={{ color: "#0081C9", fontSize: '15px' }} />
                          </h6>
                          <p>{i.influencer_name}</p>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {formatNumber(parseInt(i.follower_count))}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {i.influencer_country}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {formatNumber(parseInt(i.influencer_views))}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {formatNumber(parseInt(i.influencer_likes))}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {formatNumber(parseInt(i.influencer_comments))}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "center",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <div>
                        <a href={i.report} target="_blank" download style={{ color: 'blue', fontWeight:'bold' }}>
                          View Report
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!loading && !topinfluencers && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "2rem",
            margin: "2rem 0",
          }}
        >
          No data
        </div>
      )}
      <Footer />
    </>
  );
};

export default feature_influencer;

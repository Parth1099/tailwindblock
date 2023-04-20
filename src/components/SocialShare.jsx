import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

const SocialShare = ({ component }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/components/${component.type}/${component.slug}`}
        >
          <FacebookIcon size={32} borderRadius="14px" />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/components/${component.type}/${component.slug}`}
        >
          <LinkedinIcon size={32} borderRadius="14px" />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/components/${component.type}/${component.slug}`}
        >
          <TwitterIcon size={32} borderRadius="14px" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/components/${component.type}/${component.slug}`}
        >
          <WhatsappIcon size={32} borderRadius="14px" />
        </WhatsappShareButton>
      </div>
    </>
  );
};
export default SocialShare;

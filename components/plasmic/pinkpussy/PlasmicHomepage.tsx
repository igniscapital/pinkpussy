// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: yAVPH1y2qsbummgRmVQ7Q
// Component: 3d0JkGOLbfTY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: yAVPH1y2qsbummgRmVQ7Q/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 3d0JkGOLbfTY/css

import TwitterRoundsvgIcon from "./icons/PlasmicIcon__TwitterRoundsvg"; // plasmic-import: vk716XIEBQm1/icon
import TelegramFillSvgrepoComsvgIcon from "./icons/PlasmicIcon__TelegramFillSvgrepoComsvg"; // plasmic-import: NjVsLMP4c0ec/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  h3?: Flex__<"h3">;
  section?: Flex__<"section">;
  h1?: Flex__<"h1">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h2?: Flex__<"h2">;
  h5?: Flex__<"h5">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__pTmpE)}>
            <h3
              data-plasmic-name={"h3"}
              data-plasmic-override={overrides.h3}
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3
              )}
            >
              {"$Pussy"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__bqhp0)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__oOxhb
                )}
                component={Link}
                href={"https://twitter.com/pinkpussysol"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <TwitterRoundsvgIcon
                  className={classNames(projectcss.all, sty.svg__cPtfy)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__be579
                )}
                component={Link}
                href={"https://t.me/pinkpussysol"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <TelegramFillSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__aT4Ga)}
                  role={"img"}
                />
              </PlasmicLink__>
            </Stack__>
          </div>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Pink Pussy"}
            </h1>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__vd3BJ)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/pinkpussy/images/pinkpussypng.png",
                    fullWidth: 667,
                    fullHeight: 374,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__nLfeD)}>
                <div className={classNames(projectcss.all, sty.freeBox__fpxg7)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Pussynomics"}
                  </h2>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__aziHu)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dwf7Z
                    )}
                  >
                    {"Supply"}
                  </div>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__wolsd
                    )}
                  >
                    {"1,000,000,000"}
                  </h4>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__tGNiu)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__siDc9
                    )}
                  >
                    {"LP"}
                  </div>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__itOv7
                    )}
                  >
                    {"100%"}
                  </h4>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__gfPb3)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uA22
                    )}
                  >
                    {"LP Burn"}
                  </div>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__lbpvh
                    )}
                  >
                    {"100%"}
                  </h4>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__bgGpW)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kFvDw
                    )}
                  >
                    {"Mint Revoke"}
                  </div>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__xsUxW
                    )}
                  >
                    {"Yes"}
                  </h4>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___2AwwZ)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jReE
                    )}
                  >
                    {"Contract Renounced"}
                  </div>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__cFbte
                    )}
                  >
                    {"Yes"}
                  </h4>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__nF2Ig)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v4GIe
                    )}
                  >
                    {"Pump.fun"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__eIUk
                    )}
                    component={Link}
                    href={
                      "https://pump.fun/FhQv1Wmahp4eEDZWKXm5y5XCWGaLRCigJydtMdiVdBi2"
                    }
                    platform={"nextjs"}
                  >
                    {"pump.fun"}
                  </PlasmicLink__>
                </div>
              </div>
            </div>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {
                "Introducing PinkPussy token, the cryptocurrency with a heart as big as its impact. PinkPussy isn't just another meme coin; it's a beacon of compassion and change in the world of decentralized finance."
              }
            </h5>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "section", "h1", "columns", "img", "h2", "h5"],
  h3: ["h3"],
  section: ["section", "h1", "columns", "img", "h2", "h5"],
  h1: ["h1"],
  columns: ["columns", "img", "h2"],
  img: ["img"],
  h2: ["h2"],
  h5: ["h5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  section: "section";
  h1: "h1";
  columns: "div";
  img: typeof PlasmicImg__;
  h2: "h2";
  h5: "h5";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h2: makeNodeComponent("h2"),
    h5: makeNodeComponent("h5"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Pink Pussy",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

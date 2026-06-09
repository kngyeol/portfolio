import React from "react"

/**
 * 가독성용 인라인 강조 렌더러.
 * - `**굵게**`        → 볼드(전경색)
 * - `` `코드` ``       → primary 색 모노 칩
 * - `→` / `->`        → primary 색 화살표
 * - autoTokens=true   → 영문/숫자·기술 토큰(Nav2, transient_local, 0~360°, 5/5 …)을
 *                       전경색 medium으로 자동 강조 (한글 본문은 그대로)
 * - emphasizeLead=true→ "키워드: 설명" 형태에서 콜론 앞 키워드를 primary 볼드로
 */

// **bold** | `code` | arrow | tech-token
const MARK_RE = /(\*\*[^*]+\*\*|`[^`]+`|→|->)/g
const FULL_RE =
  /(\*\*[^*]+\*\*|`[^`]+`|→|->|[A-Za-z0-9](?:[A-Za-z0-9_/+~×°%\-]|\.(?=[A-Za-z0-9])|,(?=\d))*)/g

function renderTokens(
  text: string,
  autoTokens: boolean,
  keyStart: number,
): React.ReactNode[] {
  const re = autoTokens ? FULL_RE : MARK_RE
  re.lastIndex = 0
  const out: React.ReactNode[] = []
  let last = 0
  let k = keyStart
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      out.push(
        <React.Fragment key={k++}>{text.slice(last, m.index)}</React.Fragment>,
      )
    }
    const t = m[0]
    if (t.startsWith("**")) {
      out.push(
        <strong key={k++} className="font-semibold text-foreground">
          {t.slice(2, -2)}
        </strong>,
      )
    } else if (t.startsWith("`")) {
      out.push(
        <code
          key={k++}
          className="rounded bg-primary/10 px-1 py-0.5 font-mono text-[0.85em] text-primary"
        >
          {t.slice(1, -1)}
        </code>,
      )
    } else if (t === "→" || t === "->") {
      out.push(
        <span key={k++} className="font-semibold text-primary">
          →
        </span>,
      )
    } else {
      out.push(
        <span key={k++} className="font-medium text-foreground">
          {t}
        </span>,
      )
    }
    last = m.index + t.length
  }
  if (last < text.length) {
    out.push(<React.Fragment key={k++}>{text.slice(last)}</React.Fragment>)
  }
  return out
}

export function RichText({
  text,
  emphasizeLead = false,
  autoTokens = false,
  className,
}: {
  text: string
  emphasizeLead?: boolean
  autoTokens?: boolean
  className?: string
}) {
  let lead: React.ReactNode = null
  let body = text
  if (emphasizeLead) {
    // "키워드: 본문" — 콜론 앞이 짧고 문장부호가 없을 때만 키워드로 간주
    const m = body.match(/^([^:：.?!\n]{2,42})([:：])\s+([\s\S]+)$/)
    if (m) {
      lead = (
        <>
          <strong className="font-semibold text-primary">{m[1]}</strong>
          <span className="text-primary">{m[2]} </span>
        </>
      )
      body = m[3]
    }
  }
  return (
    <span className={className}>
      {lead}
      {renderTokens(body, autoTokens, 0)}
    </span>
  )
}

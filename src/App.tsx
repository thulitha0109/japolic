import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "activity"
  | "arrow"
  | "bell"
  | "box"
  | "check"
  | "chevron"
  | "chevronDown"
  | "cloud"
  | "copy"
  | "database"
  | "docs"
  | "download"
  | "file"
  | "folder"
  | "grid"
  | "key"
  | "more"
  | "plus"
  | "search"
  | "server"
  | "settings"
  | "terminal"
  | "upload"
  | "close";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    activity: <><path d="M3 12h4l2.5-7 5 14 2.5-7h4" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    box: <><path d="m21 8-9 5-9-5 9-5 9 5Z" /><path d="m3 8 9 5 9-5v8l-9 5-9-5V8Z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    cloud: <><path d="M20 16.2A4.5 4.5 0 0 0 18 7.5a6 6 0 0 0-11.5 1.7A4 4 0 0 0 7 17h12" /><path d="m12 12-3 3m3-3 3 3m-3-3v8" /></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    docs: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></>,
    file: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M13 2v7h7" /></>,
    folder: <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    key: <><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.7 12.3 8.8-8.8M15 8l3 3M18 5l3 3" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    terminal: <><path d="m4 17 6-6-6-6M12 19h8" /></>,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const navigation: { group: string; items: { label: string; icon: IconName; badge?: string }[] }[] = [
  { group: "WORKSPACE", items: [{ label: "Overview", icon: "grid" }, { label: "Storage", icon: "database" }, { label: "File manager", icon: "folder" }, { label: "Pipelines", icon: "server" }, { label: "Observability", icon: "activity", badge: "2" }, { label: "Access", icon: "key" }] },
  { group: "DEVELOPER", items: [{ label: "API & SDKs", icon: "terminal" }, { label: "Documentation", icon: "docs" }] },
];
const volumes = [
  { name: "northstar-prod", type: "Shared file system", mount: "/mnt/japolic/models", region: "US West · us-west-2", used: 72, usedLabel: "1.82 PB", capacity: "2.40 PB", status: "Healthy", updated: "2 min ago", color: "copper" },
  { name: "feature-extract-v4", type: "Shared file system", mount: "/mnt/japolic/features", region: "US West · us-west-2", used: 48, usedLabel: "7.6 TB", capacity: "16 TB", status: "Healthy", updated: "18 min ago", color: "blue" },
  { name: "training-archive", type: "S3-compatible object storage", mount: "s3://training-archive", region: "EU Central · eu-central-1", used: 86, usedLabel: "43 TB", capacity: "50 TB", status: "Attention", updated: "1 hr ago", color: "purple" },
];

function App() {
  const [activeNav, setActiveNav] = useState("Storage");
  const [storageTab, setStorageTab] = useState("Volumes");
  const [query, setQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [notice, setNotice] = useState("");
  const [folder, setFolder] = useState("models");
  const [fileTab, setFileTab] = useState("All files");
  const [volumeName, setVolumeName] = useState("");

  const filteredVolumes = useMemo(() => volumes.filter((volume) => `${volume.name} ${volume.type} ${volume.region}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };
  const pageDescription: Record<string, string> = {
    Overview: "A clear view of your storage, pipelines, and team activity.",
    Storage: "Manage volumes, object stores, and snapshots across your workspace.",
    "File manager": "Browse and organize files across your connected storage.",
    Pipelines: "Connect compute to data and keep every workflow moving.",
    Observability: "Live health, throughput, and usage across your infrastructure.",
    Access: "Manage the people, service identities, and keys in your workspace.",
    "API & SDKs": "Build against Japolic with the tools your team already uses.",
    Documentation: "Everything you need to make the most of Japolic.",
  };

  const storageContent = () => (
    <>
      <div className="storage-summary-grid">
        <div className="summary-card"><div className="summary-label">Total capacity <span className="summary-icon copper-icon"><Icon name="database" size={17} /></span></div><strong>2.47 <small>PB</small></strong><p><span className="good-text"><Icon name="activity" size={12} /> 18% used</span><span> across 3 volumes</span></p></div>
        <div className="summary-card"><div className="summary-label">Active volumes <span className="summary-icon green-icon"><Icon name="box" size={17} /></span></div><strong>3 <small>volumes</small></strong><p><span className="good-text"><i className="status-dot" /> All systems operational</span></p></div>
        <div className="summary-card"><div className="summary-label">Data transferred <span className="summary-icon blue-icon"><Icon name="activity" size={17} /></span></div><strong>18.6 <small>GB/s</small></strong><p><span className="good-text">↑ 12.4%</span><span> vs. last week</span></p><div className="mini-chart"><svg viewBox="0 0 190 30" preserveAspectRatio="none"><path d="M0 24 18 21 34 23 50 11 67 17 82 7 100 14 119 5 136 12 154 7 173 10 190 2" /></svg></div></div>
        <div className="summary-card cost-card"><div className="summary-label">Estimated monthly <span className="summary-icon amber-icon"><Icon name="activity" size={17} /></span></div><strong>$18,420</strong><p><span>Projected at current usage</span></p><span className="saving-chip">↓ 32% vs. last month</span></div>
      </div>
      <section className="workspace-panel volume-panel">
        <div className="panel-heading"><div><h2>Your storage</h2><p>Volumes and snapshots in Northstar Pipelines</p></div><div className="storage-actions"><button className="button secondary-button" onClick={() => setStorageTab("Snapshots")}><Icon name="box" size={15} /> Snapshots</button><button className="button primary-button" onClick={() => setShowCreate(true)}><Icon name="plus" size={16} /> Create storage</button></div></div>
        <div className="table-toolbar"><div className="tabs">{["Volumes", "Snapshots", "Backups"].map((tab) => <button key={tab} className={`tab-button ${storageTab === tab ? "current" : ""}`} onClick={() => setStorageTab(tab)}>{tab}<span>{tab === "Volumes" ? "3" : tab === "Snapshots" ? "12" : "4"}</span></button>)}</div><label className="table-search"><Icon name="search" size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter storage..." /><kbd>/</kbd></label></div>
        {storageTab === "Volumes" ? <div className="responsive-table"><table className="data-table"><thead><tr><th>NAME</th><th>TYPE</th><th>REGION</th><th>CAPACITY USED</th><th>STATUS</th><th>LAST UPDATED</th><th aria-label="Actions" /></tr></thead><tbody>{filteredVolumes.map((volume) => <tr key={volume.name}><td><div className="volume-name"><span className={`table-icon ${volume.color}`}><Icon name={volume.type.startsWith("S3") ? "box" : "database"} size={17} /></span><div><strong>{volume.name}</strong><span className="mount-path">{volume.mount}</span></div></div></td><td><span className="type-label">{volume.type}</span></td><td><span className="region-label">{volume.region}</span></td><td><div className="capacity-text"><span>{volume.usedLabel} <i>/ {volume.capacity}</i></span><b>{volume.used}%</b></div><div className="capacity-track"><span style={{ width: `${volume.used}%` }} className={volume.used > 80 ? "warn-fill" : ""} /></div></td><td><span className={`health-pill ${volume.status === "Healthy" ? "healthy" : "attention"}`}><i />{volume.status}</span></td><td className="updated-cell">{volume.updated}</td><td><button className="icon-button row-menu" aria-label={`More actions for ${volume.name}`} onClick={() => notify(`Actions for ${volume.name}`)}><Icon name="more" size={17} /></button></td></tr>)}</tbody></table>{filteredVolumes.length === 0 && <div className="empty-state">No storage matches “{query}”. Try another search.</div>}</div> : <div className="snapshot-list">{(storageTab === "Snapshots" ? ["northstar-prod · daily snapshot", "feature-extract-v4 · pre-deploy", "northstar-prod · weekly archive"] : ["northstar-prod · daily backup", "training-archive · weekly backup"]).map((name, index) => <div className="snapshot-row" key={name}><span className="table-icon purple"><Icon name="box" size={17} /></span><div><strong>{name}</strong><span>{index === 0 ? "Today, 09:42 UTC" : "Yesterday, 23:00 UTC"} · Retained for 30 days</span></div><span className="snapshot-size">{index === 0 ? "2.1 TB" : "684 GB"}</span><button className="button secondary-button" onClick={() => notify("Restore point is ready to configure")}>Restore</button></div>)}</div>}
        <div className="table-footer"><span>Showing <strong>{filteredVolumes.length}</strong> of <strong>3</strong> storage resources</span><button className="text-button" onClick={() => setActiveNav("File manager")}>Browse files <Icon name="arrow" size={14} /></button></div>
      </section>
      <div className="lower-grid"><section className="workspace-panel usage-panel"><div className="panel-heading compact-heading"><div><h2>Storage usage</h2><p>Capacity across all volumes</p></div><button className="period-select" onClick={() => notify("Showing the last 30 days")}>Last 30 days <Icon name="chevronDown" size={13} /></button></div><div className="usage-visual"><div className="usage-ring"><div><strong>18%</strong><span>of capacity</span></div></div><div className="usage-legend"><div><i className="legend-used" /><span>Used</span><strong>1.87 PB</strong></div><div><i className="legend-free" /><span>Available</span><strong>8.53 PB</strong></div><div className="usage-footnote">10.4 PB provisioned across 3 storage resources</div></div></div></section><section className="workspace-panel activity-card"><div className="panel-heading compact-heading"><div><h2>Recent activity</h2><p>Latest changes to your storage</p></div><button className="icon-button" onClick={() => setActiveNav("Observability")} aria-label="View activity"><Icon name="arrow" size={16} /></button></div><div className="activity-item"><span className="activity-badge"><Icon name="database" size={15} /></span><div><strong>Volume expanded</strong><span>northstar-prod · increased to 2.4 PB</span></div><time>12 min ago</time></div><div className="activity-item"><span className="activity-badge green-badge"><Icon name="key" size={15} /></span><div><strong>Access key created</strong><span>ci-deploy · created by you</span></div><time>2 hr ago</time></div><div className="activity-item"><span className="activity-badge purple-badge"><Icon name="box" size={15} /></span><div><strong>Snapshot completed</strong><span>northstar-prod · daily snapshot</span></div><time>Yesterday</time></div></section></div>
    </>
  );

  const fileContent = () => {
    const fileRows = [
      { name: "checkpoints", kind: "Folder", modified: "Today, 10:42 AM", size: "—", icon: "folder" as IconName, tone: "folder-tone" },
      { name: "datasets", kind: "Folder", modified: "Today, 9:18 AM", size: "—", icon: "folder" as IconName, tone: "folder-tone" },
      { name: "embeddings", kind: "Folder", modified: "Yesterday, 4:06 PM", size: "—", icon: "folder" as IconName, tone: "folder-tone" },
      { name: "model-v4.2.safetensors", kind: "Model weights", modified: "Today, 10:38 AM", size: "14.8 GB", icon: "file" as IconName, tone: "file-tone" },
      { name: "tokenizer.json", kind: "JSON file", modified: "Today, 10:31 AM", size: "4.2 MB", icon: "docs" as IconName, tone: "json-tone" },
      { name: "training-config.yaml", kind: "YAML file", modified: "Mon, Sep 21", size: "12 KB", icon: "file" as IconName, tone: "yaml-tone" },
    ].filter((item) => fileTab === "All files" || item.kind === "Folder" || (fileTab === "Folders" && item.kind === "Folder") || (fileTab === "Files" && item.kind !== "Folder"));
    return <><div className="file-layout"><aside className="file-tree"><div className="tree-heading">STORAGE VOLUMES</div><button className="tree-volume selected-tree" onClick={() => setFolder("models")}><Icon name="database" size={16} /><span>northstar-prod</span><Icon name="chevronDown" size={14} /></button><div className="tree-children"><button className={folder === "models" ? "active-folder" : ""} onClick={() => setFolder("models")}><Icon name="folder" size={15} />models</button><button className={folder === "datasets" ? "active-folder" : ""} onClick={() => setFolder("datasets")}><Icon name="folder" size={15} />datasets</button><button className={folder === "checkpoints" ? "active-folder" : ""} onClick={() => setFolder("checkpoints")}><Icon name="folder" size={15} />checkpoints</button></div><button className="tree-volume" onClick={() => setFolder("features")}><Icon name="database" size={16} /><span>feature-extract-v4</span></button><button className="tree-volume" onClick={() => setFolder("archive")}><Icon name="box" size={16} /><span>training-archive</span></button><div className="tree-storage-note"><span>STORAGE USED</span><strong>1.82 PB <small>of 2.40 PB</small></strong><div className="capacity-track"><span style={{ width: "72%" }} /></div></div></aside><div className="file-browser"><div className="file-browser-head"><div><div className="breadcrumbs"><button onClick={() => setFolder("")}>northstar-prod</button><Icon name="chevron" size={13} /><strong>{folder || "Root"}</strong></div><p>Shared with 4 compute nodes · POSIX mount</p></div><button className="button primary-button" onClick={() => notify("Choose files from your device to upload")}><Icon name="upload" size={15} /> Upload files</button></div><div className="path-bar"><Icon name="folder" size={15} /><span>/mnt/japolic/{folder || ""}</span><button onClick={() => notify("Path copied to clipboard")}><Icon name="copy" size={14} /> Copy path</button></div><div className="file-controls"><div className="tabs">{["All files", "Files", "Folders"].map((tab) => <button key={tab} className={`tab-button ${fileTab === tab ? "current" : ""}`} onClick={() => setFileTab(tab)}>{tab}</button>)}</div><label className="table-search"><Icon name="search" size={15} /><input placeholder="Search this folder..." /></label></div><div className="responsive-table file-table"><table className="data-table"><thead><tr><th>NAME <Icon name="chevronDown" size={12} /></th><th>TYPE</th><th>LAST MODIFIED</th><th>SIZE</th><th /></tr></thead><tbody>{fileRows.map((item) => <tr key={item.name} onClick={() => item.kind === "Folder" && setFolder(item.name)} className={item.kind === "Folder" ? "clickable-row" : ""}><td><div className="file-name"><span className={`filetype-icon ${item.tone}`}><Icon name={item.icon} size={16} /></span><strong>{item.name}</strong></div></td><td>{item.kind}</td><td className="updated-cell">{item.modified}</td><td className="updated-cell">{item.size}</td><td><button className="icon-button" aria-label={`Actions for ${item.name}`} onClick={(event) => { event.stopPropagation(); notify(`Actions for ${item.name}`); }}><Icon name="more" size={17} /></button></td></tr>)}</tbody></table></div><div className="file-footer"><span><Icon name="check" size={14} /> Synced just now</span><span>6 items · 14.8 GB</span></div></div></div><section className="workspace-panel connect-banner"><div className="connect-icon"><Icon name="terminal" size={19} /></div><div><strong>Access files from any compute node</strong><p>Mount this volume over POSIX or use the Japolic CLI to sync files.</p></div><button className="button secondary-button" onClick={() => setActiveNav("Pipelines")}>View connection guide <Icon name="arrow" size={14} /></button></section></>;
  };

  const genericPage = () => <div className="generic-page"><div className="generic-callout"><div className="generic-icon"><Icon name={activeNav === "Pipelines" ? "server" : activeNav === "Access" ? "key" : activeNav === "Observability" ? "activity" : "grid"} size={24} /></div><div><span className="eyebrow">NORTHSTAR PIPELINES · PRODUCTION</span><h2>{activeNav === "Overview" ? "Your infrastructure at a glance" : activeNav === "Pipelines" ? "Data pipelines" : activeNav === "Observability" ? "System health" : activeNav === "Access" ? "Workspace access" : activeNav}</h2><p>{pageDescription[activeNav]}</p></div>{activeNav === "Pipelines" && <button className="button primary-button" onClick={() => notify("New pipeline setup started")}><Icon name="plus" size={15} /> New pipeline</button>}</div><div className="generic-cards"><div className="workspace-panel generic-stat"><span>Workspace status</span><strong><i className="status-dot" /> Operational</strong><p>All 3 storage resources are healthy</p></div><div className="workspace-panel generic-stat"><span>Connected compute</span><strong>4 <small>nodes</small></strong><p>Across 2 availability zones</p></div><div className="workspace-panel generic-stat"><span>Data throughput</span><strong>18.6 <small>GB/s</small></strong><p><span className="good-text">↑ 12.4%</span> this week</p></div></div><section className="workspace-panel generic-detail"><div className="panel-heading"><div><h2>{activeNav === "Pipelines" ? "Connected pipelines" : activeNav === "Access" ? "People & service accounts" : "Latest activity"}</h2><p>Everything is connected to northstar-prod</p></div><button className="text-button" onClick={() => setActiveNav("Storage")}>Go to storage <Icon name="arrow" size={14} /></button></div><div className="generic-list-row"><span className="table-icon copper"><Icon name="database" size={17} /></span><div><strong>{activeNav === "Pipelines" ? "feature-extract-v4" : "northstar-prod"}</strong><span>Production · US West · Updated 2 min ago</span></div><span className="health-pill healthy"><i />Healthy</span></div><div className="generic-list-row"><span className="table-icon blue"><Icon name="server" size={17} /></span><div><strong>northstar-training</strong><span>Batch inference · 4 compute nodes connected</span></div><span className="health-pill healthy"><i />Running</span></div></section><section className="setup-strip"><div className="setup-check"><Icon name="check" size={18} /></div><div><strong>You're all set up</strong><p>Your first storage volume is ready for your team.</p></div><button className="button secondary-button" onClick={() => setActiveNav("File manager")}>Open file manager <Icon name="arrow" size={14} /></button></section></div>;

  return (
    <div className="product-shell">
      <aside className="product-sidebar"><div className="sidebar-brand"><div className="brand-symbol"><Icon name="database" size={20} /></div><div><strong>JAPOLIC</strong><span>SHARED STORAGE</span></div></div><button className="workspace-picker"><span className="workspace-mini">N</span><span><b>Northstar Pipelines</b><small>production</small></span><Icon name="chevronDown" size={15} /></button><nav className="product-nav" aria-label="Main navigation">{navigation.map((section) => <div className="nav-section" key={section.group}><span className="nav-label">{section.group}</span>{section.items.map((item) => <button key={item.label} className={`product-nav-item ${activeNav === item.label ? "active" : ""}`} onClick={() => setActiveNav(item.label)}><Icon name={item.icon} size={17} /><span>{item.label}</span>{item.badge && <small className="nav-count">{item.badge}</small>}</button>)}</div>)}</nav><div className="sidebar-spacer" /><div className="plan-note"><span><i />JUST CONTROL PLANE</span><p>Efficient resource use keeps infrastructure cost predictable.</p></div><button className="account-row" onClick={() => notify("Account menu opened")}><span className="account-avatar">AK</span><span><b>Ari Kim</b><small>Infrastructure admin</small></span><Icon name="more" size={16} /></button></aside>
      <main className="product-main"><header className="product-topbar"><div className="topbar-title"><span className="topbar-icon"><Icon name="arrow" size={16} /></span><div><strong>{activeNav === "File manager" ? "File manager" : activeNav === "Storage" ? "Storage" : activeNav}</strong><span>{pageDescription[activeNav]}</span></div></div><div className="topbar-right"><label className="global-search"><Icon name="search" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search or run a command" /><kbd>⌘ K</kbd></label><button className="top-icon-button notification-button" aria-label="Notifications" onClick={() => notify("You're all caught up")}><Icon name="bell" size={17} /><i /></button></div></header><div className="product-content"><div className="page-heading"><div><span className="eyebrow">WORKSPACE / {activeNav.toUpperCase()}</span><h1>{activeNav === "Storage" ? "Storage" : activeNav === "File manager" ? "File manager" : activeNav}</h1><p>{pageDescription[activeNav]}</p></div><div className="saved-status"><span className="status-dot" /> Draft saved just now</div></div>{activeNav === "Storage" ? storageContent() : activeNav === "File manager" ? fileContent() : genericPage()}</div></main>
      {showCreate && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowCreate(false); }}><section className="create-modal" role="dialog" aria-modal="true" aria-labelledby="create-title"><div className="modal-heading"><div><span className="eyebrow">NEW RESOURCE</span><h2 id="create-title">Create storage</h2><p>Set up a shared volume for your workloads.</p></div><button className="icon-button" aria-label="Close" onClick={() => setShowCreate(false)}><Icon name="close" size={18} /></button></div><label className="form-label">Storage name<input autoFocus value={volumeName} onChange={(event) => setVolumeName(event.target.value)} placeholder="e.g. model-training-prod" /></label><span className="form-label">Storage type</span><div className="type-choice selected-choice"><span className="type-choice-icon"><Icon name="database" size={17} /></span><span><strong>Shared file system</strong><small>POSIX access across compute nodes</small></span><span className="radio-check"><Icon name="check" size={13} /></span></div><div className="type-choice"><span className="type-choice-icon amber-type"><Icon name="box" size={17} /></span><span><strong>S3-compatible object storage</strong><small>Durable storage for data and artifacts</small></span><span className="radio-empty" /></div><div className="modal-fields"><label className="form-label">Region<select defaultValue="us-west-2"><option value="us-west-2">US West (Oregon) · us-west-2</option><option value="us-east-1">US East (N. Virginia) · us-east-1</option><option value="eu-central-1">EU Central (Frankfurt) · eu-central-1</option></select></label><label className="form-label">Capacity<select defaultValue="2.4"><option value="2.4">2.40 PB</option><option value="1">1.00 PB</option><option value=".5">500 TB</option></select></label></div><div className="modal-info"><Icon name="check" size={15} /><span>Encrypted at rest · 3× regional replication · Resize anytime</span></div><div className="modal-actions"><button className="button secondary-button" onClick={() => setShowCreate(false)}>Cancel</button><button className="button primary-button" onClick={() => { if (!volumeName.trim()) { notify("Add a name for your storage volume"); return; } setShowCreate(false); notify(`${volumeName} is being provisioned`); setVolumeName(""); }}>Create volume <Icon name="arrow" size={14} /></button></div></section></div>}{notice && <div className="toast"><span><Icon name="check" size={15} /></span>{notice}</div>}
    </div>
  );
}

export default App;

(function() {var implementors = {};
implementors["ic_artifact_manager"] = [{"text":"impl&lt;Pool:&nbsp;<a class=\"trait\" href=\"ic_interfaces/consensus_pool/trait.ConsensusPool.html\" title=\"trait ic_interfaces::consensus_pool::ConsensusPool\">ConsensusPool</a> + <a class=\"trait\" href=\"ic_interfaces/gossip_pool/trait.ConsensusGossipPool.html\" title=\"trait ic_interfaces::gossip_pool::ConsensusGossipPool\">ConsensusGossipPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactClient.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactClient\">ArtifactClient</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.ConsensusArtifact.html\" title=\"struct ic_artifact_manager::artifact::ConsensusArtifact\">ConsensusArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/clients/struct.ConsensusClient.html\" title=\"struct ic_artifact_manager::clients::ConsensusClient\">ConsensusClient</a>&lt;Pool&gt;","synthetic":false,"types":["ic_artifact_manager::clients::ConsensusClient"]},{"text":"impl&lt;Pool:&nbsp;<a class=\"trait\" href=\"ic_interfaces/ingress_pool/trait.IngressPool.html\" title=\"trait ic_interfaces::ingress_pool::IngressPool\">IngressPool</a> + <a class=\"trait\" href=\"ic_interfaces/gossip_pool/trait.IngressGossipPool.html\" title=\"trait ic_interfaces::gossip_pool::IngressGossipPool\">IngressGossipPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactClient.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactClient\">ArtifactClient</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.IngressArtifact.html\" title=\"struct ic_artifact_manager::artifact::IngressArtifact\">IngressArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/clients/struct.IngressClient.html\" title=\"struct ic_artifact_manager::clients::IngressClient\">IngressClient</a>&lt;Pool&gt;","synthetic":false,"types":["ic_artifact_manager::clients::IngressClient"]},{"text":"impl&lt;PoolCertification:&nbsp;<a class=\"trait\" href=\"ic_interfaces/certification/trait.CertificationPool.html\" title=\"trait ic_interfaces::certification::CertificationPool\">CertificationPool</a> + <a class=\"trait\" href=\"ic_interfaces/gossip_pool/trait.CertificationGossipPool.html\" title=\"trait ic_interfaces::gossip_pool::CertificationGossipPool\">CertificationGossipPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactClient.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactClient\">ArtifactClient</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.CertificationArtifact.html\" title=\"struct ic_artifact_manager::artifact::CertificationArtifact\">CertificationArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/clients/struct.CertificationClient.html\" title=\"struct ic_artifact_manager::clients::CertificationClient\">CertificationClient</a>&lt;PoolCertification&gt;","synthetic":false,"types":["ic_artifact_manager::clients::CertificationClient"]},{"text":"impl&lt;Pool:&nbsp;<a class=\"trait\" href=\"ic_interfaces/dkg/trait.DkgPool.html\" title=\"trait ic_interfaces::dkg::DkgPool\">DkgPool</a> + <a class=\"trait\" href=\"ic_interfaces/gossip_pool/trait.DkgGossipPool.html\" title=\"trait ic_interfaces::gossip_pool::DkgGossipPool\">DkgGossipPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactClient.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactClient\">ArtifactClient</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.DkgArtifact.html\" title=\"struct ic_artifact_manager::artifact::DkgArtifact\">DkgArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/clients/struct.DkgClient.html\" title=\"struct ic_artifact_manager::clients::DkgClient\">DkgClient</a>&lt;Pool&gt;","synthetic":false,"types":["ic_artifact_manager::clients::DkgClient"]}];
implementors["ic_state_manager"] = [{"text":"impl <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactClient.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactClient\">ArtifactClient</a>&lt;<a class=\"struct\" href=\"ic_state_manager/state_sync/struct.StateSyncArtifact.html\" title=\"struct ic_state_manager::state_sync::StateSyncArtifact\">StateSyncArtifact</a>&gt; for <a class=\"struct\" href=\"ic_state_manager/struct.StateManagerImpl.html\" title=\"struct ic_state_manager::StateManagerImpl\">StateManagerImpl</a>","synthetic":false,"types":["ic_state_manager::StateManagerImpl"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()